// Constantes compartilhadas: paleta (igual ao mapa/index.html), status e layout de raias.

export const PALETTE = {
  ink: '#16140f', paper: '#f4f0e6', card: '#fbf9f2', line: '#d8d0bd',
  accent: '#b5462b', blue: '#2a5a86', green: '#2e6b4a', gold: '#a9842f', mute: '#8a8170',
}

// Conjunto único de status (espelha monday-prompts.md, Passo 0).
export const STATUS = {
  'Backlog':      { dot: PALETTE.mute,   bg: '#ece6d6', fg: '#5a5340' },
  'A fazer':      { dot: PALETTE.blue,   bg: '#eef3f7', fg: '#2a5a86' },
  'Em produção':  { dot: PALETTE.gold,   bg: '#f3e9cf', fg: '#7d5f17' },
  'Em revisão':   { dot: PALETTE.accent, bg: '#f7e3df', fg: '#a3271d' },
  'Rodando':      { dot: PALETTE.green,  bg: '#dcebe1', fg: '#2e6b4a' },
  'Pausado':      { dot: PALETTE.mute,   bg: '#e9e4d7', fg: '#6f6650' },
  'Concluído':    { dot: PALETTE.green,  bg: '#dcebe1', fg: '#2e6b4a' },
}

// Geometria das raias (lanes horizontais).
export const LANE_H = 150       // altura de cada raia
export const LANE_W = 1760      // largura útil
export const NODE_TOP = 38      // offset vertical do nó dentro da raia
