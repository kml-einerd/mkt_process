import { STATUS } from '../data/shared.js'

// Painel lateral: detalhe do Entregável clicado (com Checklist e POP), ou a visão geral do processo.
export default function DetailPanel({ processo, node, onClose }) {
  if (node) {
    const st = STATUS[node.status] || STATUS['Backlog']
    return (
      <aside className="detail">
        <button className="detail-close" onClick={onClose}>×</button>
        <div className="detail-kick">Entregável{node.setor ? ` · ${node.setor}` : ''}</div>
        <h2 className="detail-title">{node.label}</h2>
        <div className="detail-row">
          <span className="badge" style={{ background: st.bg, color: st.fg }}>{node.status}</span>
        </div>
        <dl className="detail-dl">
          {node.responsavel && (<><dt>Responsável</dt><dd>{node.responsavel}</dd></>)}
          {node.detalhe && (<><dt>Descrição</dt><dd>{node.detalhe}</dd></>)}
        </dl>
        {node.checklist?.length > 0 && (
          <>
            <div className="detail-kick2">Checklist</div>
            <ul className="detail-chk">
              {node.checklist.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </>
        )}
        <div className="detail-links">
          {node.pop && <a className="btn" href={node.pop.href} target="_blank" rel="noreferrer">🔗 {node.pop.label || 'POP'}</a>}
          <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>🔗 Item no Monday</a>
        </div>
      </aside>
    )
  }
  if (!processo) return null
  return (
    <aside className="detail">
      <div className="detail-kick">{processo.categoria}{processo.fase ? ` · ${processo.fase}` : ''}</div>
      <h2 className="detail-title">{processo.titulo}</h2>
      <p className="detail-desc">{processo.descricao}</p>
      {processo.docs?.length > 0 && (
        <>
          <div className="detail-kick2">Documentos / POPs</div>
          <div className="detail-links col">
            {processo.docs.map((d) => (
              <a key={d.href} className="btn ghost" href={d.href} target="_blank" rel="noreferrer">🔗 {d.label}</a>
            ))}
          </div>
        </>
      )}
      <p className="detail-hint">Clique numa caixa do fluxo para ver o checklist e o POP do entregável. Caixas com “abrir →” levam ao processo detalhado.</p>
    </aside>
  )
}
