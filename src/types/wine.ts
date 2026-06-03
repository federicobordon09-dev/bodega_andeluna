export interface WineScore {
  critic: string
  vintage: string
  score: number
}

export interface Wine {
  id: string
  name: string
  varietals: string[]
  description: string
  image: string
  award?: string
  score?: number
  scoreSource?: string
  // Detailed info
  philosophy?: string
  vineyard?: string
  vinification?: string
  tastingNotes?: string
  scores?: WineScore[]
  winemaker?: string
  serveTemp?: string
  aging?: string
}

export interface WineSubLine {
  id: string
  name: string
  wines: Wine[]
}

export interface WineLine {
  id: string
  name: string
  subLines: WineSubLine[]
}
