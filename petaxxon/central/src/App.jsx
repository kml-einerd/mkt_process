import { useMemo, useState, useCallback } from 'react'
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react'
import ProcessNode from './components/ProcessNode.jsx'
import LaneNode from './components/LaneNode.jsx'
import Sidebar from './components/Sidebar.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import { PROCESSOS, CATEGORIAS } from './data/registry.js'
import { LANE_H, LANE_W, NODE_TOP } from './data/shared.js'

const nodeTypes = { process: ProcessNode, lane: LaneNode }

const HOME_ID = 'funil-agencia-macro'

// Mapa id -> nome da categoria do catálogo (para o breadcrumb mesmo sem dados carregados).
const CAT_OF = {}
for (const cat of CATEGORIAS) for (const it of cat.itens) CAT_OF[it.id] = cat.nome

// Converte os dados declarativos do processo (lanes/nodes/edges) em nós/arestas do React Flow.
function build(processo) {
  if (!processo) return { nodes: [], edges: [] }
  const laneIndex = Object.fromEntries(processo.lanes.map((l, i) => [l.id, i]))
  const laneColor = Object.fromEntries(processo.lanes.map((l) => [l.id, l.color]))
  const laneLabel = Object.fromEntries(processo.lanes.map((l) => [l.id, l.label]))

  const laneNodes = processo.lanes.map((l, i) => ({
    id: `lane-${l.id}`,
    type: 'lane',
    position: { x: 0, y: i * LANE_H },
    data: { label: l.label, color: l.color, w: LANE_W, h: LANE_H },
    draggable: false, selectable: false, zIndex: 0,
  }))

  const stepNodes = processo.nodes.map((n) => ({
    id: n.id,
    type: 'process',
    position: { x: n.x, y: laneIndex[n.lane] * LANE_H + NODE_TOP },
    data: { ...n, laneColor: laneColor[n.lane], setor: laneLabel[n.lane] },
    zIndex: 2,
  }))

  const edges = processo.edges.map((e, i) => ({
    id: `e${i}`,
    source: e.source, target: e.target,
    label: e.label,
    type: 'smoothstep',
    animated: !e.feedback,
    style: e.feedback ? { stroke: '#b5462b', strokeDasharray: '5 4' } : { stroke: '#8a8170' },
    labelStyle: { fontSize: 10, fill: e.feedback ? '#b5462b' : '#6f6650' },
  }))

  return { nodes: [...laneNodes, ...stepNodes], edges }
}

export default function App() {
  const [selectedId, setSelectedId] = useState(HOME_ID)
  const [history, setHistory] = useState([]) // pilha de ids visitados antes do atual
  const [nodeDetail, setNodeDetail] = useState(null)
  const processo = PROCESSOS[selectedId]
  const { nodes, edges } = useMemo(() => build(processo), [processo])

  // Navega para um id empilhando o atual no histórico.
  const navigate = useCallback((id) => {
    if (!id || id === selectedId) { setNodeDetail(null); return }
    setHistory((h) => [...h, selectedId])
    setSelectedId(id)
    setNodeDetail(null)
  }, [selectedId])

  // Seleção pela sidebar = navega normalmente (entra no histórico).
  const onSelect = useCallback((id) => { navigate(id) }, [navigate])

  // Voltar: desempilha o último id visitado.
  const onBack = useCallback(() => {
    setHistory((h) => {
      if (h.length === 0) return h
      const prev = h[h.length - 1]
      setSelectedId(prev)
      setNodeDetail(null)
      return h.slice(0, -1)
    })
  }, [])

  // Início: vai para o macro e zera o histórico.
  const onHome = useCallback(() => {
    setSelectedId(HOME_ID)
    setHistory([])
    setNodeDetail(null)
  }, [])

  const onNodeClick = useCallback((_, node) => {
    if (node.type !== 'process') return
    if (node.data.goto) navigate(node.data.goto)
    else setNodeDetail(node.data)
  }, [navigate])

  const titulo = processo?.titulo || selectedId
  const categoria = processo?.categoria || CAT_OF[selectedId] || ''
  const fase = processo?.fase

  return (
    <div className="app">
      <Sidebar selected={selectedId} onSelect={onSelect} />
      <main className="canvas">
        <header className="topbar">
          <div className="topbar-nav">
            <button className="tb-btn" onClick={onBack} disabled={history.length === 0} title="Voltar para o processo anterior">← Voltar</button>
            <button className="tb-btn ghost" onClick={onHome} disabled={selectedId === HOME_ID && history.length === 0} title="Voltar ao macro">⌂ Início</button>
          </div>
          <div className="topbar-crumb">
            {categoria && <span className="tb-cat">{categoria}{fase ? ` · ${fase}` : ''}</span>}
            <span className="tb-title">{titulo}</span>
          </div>
        </header>
        <div className="canvas-flow">
          {processo ? (
            <ReactFlow
              key={selectedId}
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={onNodeClick}
              onPaneClick={() => setNodeDetail(null)}
              fitView
              fitViewOptions={{ padding: 0.15 }}
              minZoom={0.2}
              proOptions={{ hideAttribution: true }}
            >
              <Background color="#d8d0bd" gap={22} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeColor={(n) => (n.type === 'lane' ? '#ece6d6' : '#b5462b')} />
            </ReactFlow>
          ) : (
            <div className="empty">
              <div className="empty-card">
                <div className="empty-kick">A desenhar</div>
                <h2>Este processo ainda não foi mapeado</h2>
                <p>Ele está no inventário (barra lateral). Como o visual é data-driven, basta criar o arquivo de dados — o render já está pronto e fica igual aos demais.</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <DetailPanel processo={processo} node={nodeDetail} onClose={() => setNodeDetail(null)} />
    </div>
  )
}
