// Copia a documentação (vault) do repositório petaxxon/ para central/public/vault/
// preservando a estrutura de pastas, apenas arquivos .md e .html.
// Roda em predev/prebuild para que os links (vault/...) funcionem no dev server e no build.
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CENTRAL = path.resolve(__dirname, '..')        // .../petaxxon/central
const SRC = path.resolve(CENTRAL, '..')              // .../petaxxon
const DEST = path.join(CENTRAL, 'public', 'vault')

const DIRS = ['processos', 'setups', 'funis', 'campanhas', 'operacao', 'mapa', 'dados']
const FILES = ['GAPS.md', 'INDEX.md', 'README.md']
const KEEP = /\.(md|html)$/i

let copied = 0

async function exists(p) {
  try { await fs.access(p); return true } catch { return false }
}

async function copyDir(srcDir, destDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true })
  for (const e of entries) {
    const s = path.join(srcDir, e.name)
    const d = path.join(destDir, e.name)
    if (e.isDirectory()) {
      await copyDir(s, d)
    } else if (e.isFile() && KEEP.test(e.name)) {
      await fs.mkdir(path.dirname(d), { recursive: true })
      await fs.copyFile(s, d)
      copied++
    }
  }
}

async function main() {
  // Limpa destino para não deixar arquivos órfãos de execuções anteriores.
  await fs.rm(DEST, { recursive: true, force: true })
  await fs.mkdir(DEST, { recursive: true })

  for (const dir of DIRS) {
    const src = path.join(SRC, dir)
    if (await exists(src)) {
      await copyDir(src, path.join(DEST, dir))
    } else {
      console.warn(`[copy-docs] aviso: pasta ausente, ignorada: ${dir}`)
    }
  }

  for (const file of FILES) {
    const src = path.join(SRC, file)
    if ((await exists(src)) && KEEP.test(file)) {
      await fs.copyFile(src, path.join(DEST, file))
      copied++
    } else {
      console.warn(`[copy-docs] aviso: arquivo ausente, ignorado: ${file}`)
    }
  }

  console.log(`[copy-docs] ${copied} arquivo(s) copiado(s) para ${path.relative(CENTRAL, DEST)}/`)
}

main().catch((err) => { console.error('[copy-docs] erro:', err); process.exit(1) })
