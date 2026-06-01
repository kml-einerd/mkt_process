import { CATEGORIAS, PROCESSOS } from '../data/registry.js'

// Lista todos os processos por categoria. "pronto" = tem diagrama; senão "a desenhar".
export default function Sidebar({ selected, onSelect }) {
  const total = CATEGORIAS.reduce((n, c) => n + c.itens.length, 0)
  const prontos = Object.keys(PROCESSOS).length
  return (
    <aside className="sidebar">
      <div className="sb-head">
        <div className="sb-title">Central de Operações</div>
        <div className="sb-sub">Petaxxon · processos</div>
        <div className="sb-count">{prontos} de {total} desenhados</div>
      </div>
      <nav className="sb-nav">
        {CATEGORIAS.map((cat) => (
          <div key={cat.nome} className="sb-cat">
            <div className="sb-cat-name">{cat.nome}</div>
            {cat.itens.map((it) => {
              const pronto = !!PROCESSOS[it.id]
              const active = selected === it.id
              return (
                <button
                  key={it.id}
                  className={`sb-item${active ? ' act' : ''}${pronto ? '' : ' todo'}`}
                  onClick={() => onSelect(it.id)}
                >
                  <span className="sb-item-name">{it.nome}</span>
                  {!pronto && <span className="sb-tag">a desenhar</span>}
                </button>
              )
            })}
          </div>
        ))}
      </nav>
    </aside>
  )
}
