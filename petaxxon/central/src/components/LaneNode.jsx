// Raia (swimlane) horizontal: banda de fundo com rótulo do papel. Não interativa.
export default function LaneNode({ data }) {
  return (
    <div className="lane" style={{ width: data.w, height: data.h, borderLeftColor: data.color }}>
      <span className="lane-label" style={{ color: data.color }}>{data.label}</span>
    </div>
  )
}
