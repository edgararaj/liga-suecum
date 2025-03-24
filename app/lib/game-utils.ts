import fs from 'fs';
import path from 'path';
import { Journey, Game } from '../types/schedule';

// Load tournament data from JSON file
export function loadTournamentData(): Journey[] {
  const jsonPath = path.join(process.cwd(), 'public', 'tournament_schedule.json');
  const fileContents = fs.readFileSync(jsonPath, 'utf8');
  return JSON.parse(fileContents);
}

// Filter games that have scores (completed games)
export function getCompletedGames(journeys: Journey[]): Journey[] {
  return journeys.map(journey => ({
    ...journey,
    games: journey.games.filter(game => 
      !('bye' in game) && game.score1 !== undefined && game.score2 !== undefined
    )
  })).filter(journey => journey.games.length > 0);
}

// Filter games that don't have scores (upcoming games)
export function getUpcomingGames(journeys: Journey[]): Journey[] {
  return journeys.map(journey => ({
    ...journey,
    games: journey.games.filter(game => 
      'bye' in game || game.score1 === undefined || game.score2 === undefined
    )
  })).filter(journey => journey.games.length > 0);
}

// Helper function to get ordinal suffix for journey numbers
export function getOrdinal(n: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
} 