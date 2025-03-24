export interface Game {
  team1?: string;
  team2?: string;
  score1?: number;
  score2?: number;
  team?: string;
  bye?: boolean;
}

export interface Journey {
  startDate: string;
  endDate: string;
  games: Game[];
}

export interface JourneyResult {
  journeyIndex: number;
  games: Game[];
}

export interface TeamStats {
  id: string;
  name: string;
  points: number;
  wins: number;
  losses: number;
  pointsScored: number;
  pointsConceded: number;
} 