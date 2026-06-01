import { STATUS } from '../data/shared.js'

// Painel lateral direito: detalhe do nó clicado, ou a visão geral do processo.
export default function DetailPanel({ processo, node, onClose }) {
  if (node) {
    const st = STATUS[node.status] || STATUS['Backlog']
    return (
      <aside className="detail">
        <button className="detail-close" onClick={onClose}>×</button>
        <div className="detail-kick">Passo do processo</div>
        <h2 className="detail-title">{node.label}</h2>
        <div className="detail-row">
          <span className="badge" style={{ background: st.bg, color: st.fg }}>{node.status}</span>
        </div>
        <dl className="detail-dl">
          <dt>Responsável</dt><dd>{node.dono}</dd>
          {node.detalhe && (<><dt>O que acontece</dt><dd>{node.detalhe}</dd></>)}
        </dl>
        <div className="detail-links">
          {node.ficha && <a className="btn" href={node.ficha} target="_blank" rel="noreferrer">🔗 Abrir ficha</a>}
          <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>🔗 Item no Monday</a>
        </div>
      </aside>
    )
  }
  if (!processo) return null
  return (
    <aside className="detail">
      <div className="detail-kick">{processo.categoria} · {processo.fase}</div>
      <h2 className="detail-title">{processo.titulo}</h2>
      <p className="detail-desc">{processo.descricao}</p>
      <div className="detail-kick2">Documentos</div>
      <div className="detail-links col">
        {processo.docs?.map((d) => (
          <a key={d.href} className="btn ghost" href={d.href} target="_blank" rel="noreferrer">🔗 {d.label}</a>
        ))}
      </div>
      <p className="detail-hint">Clique em qualquer caixa do fluxo para ver os detalhes do passo.</p>
    </aside>
  )
}
