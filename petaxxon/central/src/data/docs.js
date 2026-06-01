// Helper para resolver hrefs de documentos.
// Os processos referenciam docs com caminho relativo ('../setups/x.md', '../funis/y.md' etc.),
// que quebram no dev server. As docs são copiadas para public/vault/ (scripts/copy-docs.mjs),
// então traduzimos '../resto' -> 'vault/resto'. Caminhos absolutos/externos passam intactos.
export function resolveDocHref(href) {
  if (!href) return href
  if (/^(https?:|mailto:|#)/.test(href)) return href
  if (href.startsWith('../')) return 'vault/' + href.slice(3)
  if (href.startsWith('./')) return 'vault/' + href.slice(2)
  if (href.startsWith('/')) return href
  // caminho relativo simples (ex.: 'GAPS.md') -> vault/
  if (/\.(md|html)$/i.test(href)) return 'vault/' + href
  return href
}
