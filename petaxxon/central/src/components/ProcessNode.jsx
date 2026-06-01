import { Handle, Position } from '@xyflow/react'
import { STATUS } from '../data/shared.js'

// Nó rico e clicável: rótulo + status + dono + atalhos. O detalhe completo abre no painel lateral.
export default function ProcessNode({ data, selected }) {
  const st = STATUS[data.status] || STATUS['Backlog']
  return (
    <div className={`pnode${selected ? ' sel' : ''}`} style={{ borderTopColor: data.laneColor }}>
      <Handle type="target" position={Position.Left} />
      <div className="pnode-top">
        <span className="dot" style={{ background: st.dot }} />
        <span className="pnode-label">{data.label}</span>
      </div>
      <div className="pnode-meta">
        <span className="badge" style={{ background: st.bg, color: st.fg }}>{data.status}</span>
        <span className="dono">{data.dono}</span>
      </div>
      <div className="pnode-links">
        {data.ficha && <span className="lk">🔗 ficha</span>}
        {data.detalhe && <span className="lk">ⓘ detalhe</span>}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}
