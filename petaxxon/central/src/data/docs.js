// Helper para resolver hrefs de documentos.
// Os processos referenciam docs com caminho relativo ('../setups/x.md', '../funis/y.md' etc.),
// que quebram no dev server. As docs são copiadas para public/vault/ (scripts/copy-docs.mjs),
// então traduzimos '../resto' -> 'vault/resto'. Caminhos absolutos/externos passam intactos.
export function resolveDocHref(href) {
  if (!href) return href
  if (/^(https?:|mailto:|#)/.test(href)) return href
  if (href.includes('viewer.html?file=')) return href

  let resolved = href
  if (href.startsWith('../')) {
    resolved = 'vault/' + href.slice(3)
  } else if (href.startsWith('./')) {
    resolved = 'vault/' + href.slice(2)
  } else if (!href.startsWith('/')) {
    // caminho relativo simples (ex.: 'GAPS.md') -> vault/
    if (/\.(md|html)$/i.test(href)) {
      resolved = 'vault/' + href
    }
  }

  // Se o caminho resolvido terminar com .md, envolve no visualizador
  if (resolved.endsWith('.md')) {
    return `viewer.html?file=${encodeURIComponent(resolved)}`
  }
  return resolved
}
