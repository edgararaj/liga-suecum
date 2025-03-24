export interface RegularGame {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
}

export interface ByeGame {
  team: string;
  bye: true;
}

export type Game = RegularGame | ByeGame;

export interface Journey {
  startDate: string;
  endDate: string;
  games: Game[];
} 