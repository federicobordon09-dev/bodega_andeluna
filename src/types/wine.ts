export interface Wine {
  id: string
  name: string
  varietals: string[]
  description: string
  image: string
  award?: string
  score?: number
  scoreSource?: string
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
