import { Handle, Position } from '@xyflow/react'
import { STATUS } from '../data/shared.js'

// Nó = Entregável. Schema canônico: label(Entregável) · responsavel · status · checklist · pop(link).
export default function ProcessNode({ data, selected }) {
  const st = STATUS[data.status] || STATUS['Backlog']
  const nChk = data.checklist?.length || 0
  return (
    <div className={`pnode${selected ? ' sel' : ''}${data.goto ? ' macro' : ''}`} style={{ borderTopColor: data.laneColor }}>
      <Handle type="target" position={Position.Left} />
      <div className="pnode-top">
        <span className="dot" style={{ background: st.dot }} />
        <span className="pnode-label">{data.label}</span>
      </div>
      <div className="pnode-meta">
        <span className="badge" style={{ background: st.bg, color: st.fg }}>{data.status}</span>
        {data.responsavel && <span className="dono">{data.responsavel}</span>}
      </div>
      <div className="pnode-links">
        {nChk > 0 && <span className="lk chk">☑ {nChk}</span>}
        {data.pop && <span className="lk">🔗 POP</span>}
        {data.goto && <span className="lk go">abrir →</span>}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}
