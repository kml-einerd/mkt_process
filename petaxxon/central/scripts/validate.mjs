// Valida a integridade dos dados de processo registrados em src/data/registry.js.
// Para cada processo verifica:
//  - todo node.lane existe em lanes
//  - node.x é número
//  - node.status pertence ao conjunto canônico (STATUS)
//  - ids de nó únicos dentro do processo
// Importa o registry dinamicamente (ESM puro, sem JSX) e reporta erros agregados.
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CENTRAL = path.resolve(__dirname, '..')

const registryUrl = pathToFileURL(path.join(CENTRAL, 'src', 'data', 'registry.js')).href
const sharedUrl = pathToFileURL(path.join(CENTRAL, 'src', 'data', 'shared.js')).href

const { PROCESSOS, CATEGORIAS } = await import(registryUrl)
const { STATUS } = await import(sharedUrl)
const VALID_STATUS = new Set(Object.keys(STATUS))

const errors = []
const warnings = []
let nProc = 0
let nNodes = 0

for (const [key, processo] of Object.entries(PROCESSOS)) {
  nProc++
  const where = `[${key}]`

  if (!processo || typeof processo !== 'object') {
    errors.push(`${where} export default inválido (não é objeto)`)
    continue
  }
  if (processo.id && processo.id !== key) {
    warnings.push(`${where} processo.id ("${processo.id}") difere da chave do registry`)
  }
  if (!Array.isArray(processo.lanes)) { errors.push(`${where} lanes ausente/!array`); continue }
  if (!Array.isArray(processo.nodes)) { errors.push(`${where} nodes ausente/!array`); continue }
  if (!Array.isArray(processo.edges)) { errors.push(`${where} edges ausente/!array`); continue }

  const laneIds = new Set(processo.lanes.map((l) => l.id))
  const seen = new Set()

  for (const n of processo.nodes) {
    nNodes++
    const at = `${where} node "${n.id}"`
    if (n.id == null) { errors.push(`${where} node sem id`); continue }
    if (seen.has(n.id)) errors.push(`${at}: id duplicado`)
    seen.add(n.id)
    if (!laneIds.has(n.lane)) errors.push(`${at}: lane "${n.lane}" não existe em lanes`)
    if (typeof n.x !== 'number' || Number.isNaN(n.x)) errors.push(`${at}: x não é número (${JSON.stringify(n.x)})`)
    if (!VALID_STATUS.has(n.status)) errors.push(`${at}: status inválido "${n.status}"`)
    if (n.goto && !PROCESSOS[n.goto]) {
      // goto pode apontar para item "a desenhar" (no catálogo, sem dados) — aviso, não erro.
      const inCat = CATEGORIAS.some((c) => c.itens.some((it) => it.id === n.goto))
      if (inCat) warnings.push(`${at}: goto "${n.goto}" é item a desenhar (sem dados ainda)`)
      else errors.push(`${at}: goto "${n.goto}" não existe no registry nem no catálogo`)
    }
  }

  // edges devem referenciar nós existentes do mesmo processo
  for (const e of processo.edges) {
    if (!seen.has(e.source)) errors.push(`${where} edge source "${e.source}" não é um node`)
    if (!seen.has(e.target)) errors.push(`${where} edge target "${e.target}" não é um node`)
  }
}

console.log(`Validados ${nProc} processos, ${nNodes} nós.`)
if (warnings.length) {
  console.log(`\n${warnings.length} aviso(s):`)
  for (const w of warnings) console.log('  ! ' + w)
}
if (errors.length) {
  console.error(`\n${errors.length} ERRO(S):`)
  for (const e of errors) console.error('  ✗ ' + e)
  process.exit(1)
}
console.log('\nOK — todos os processos válidos.')
