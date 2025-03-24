import fs from 'fs';
import path from 'path';
import Navigation from "@/components/navigation"
import { Trophy, Medal, Award } from "lucide-react"
import { Game, Journey, TeamStats } from "../types/schedule";

// Tipos para os dados
interface Game {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  bye?: boolean;
  team?: string;
}

interface Journey {
  startDate: string;
  endDate: string;
  games: Game[];
}

interface JourneyResult {
  journeyIndex: number;
  games: Game[];
}

interface TeamStats {
  id: string;
  name: string;
  points: number;
  wins: number;
  losses: number;
  pointsScored: number;
  pointsConceded: number;
}

export default function Leaderboard() {
  // Carregar dados do calendário com resultados
  const schedulePath = path.join(process.cwd(), 'public', 'tournament_schedule.json');
  const scheduleContents = fs.readFileSync(schedulePath, 'utf8');
  const journeys: Journey[] = JSON.parse(scheduleContents);
  
  // Extrair todos os nomes de equipes únicos
  const teamNames = new Set<string>();
  journeys.forEach(journey => {
    journey.games.forEach(game => {
      if ('team1' in game) {
        teamNames.add(game.team1);
        teamNames.add(game.team2);
      } else if ('team' in game) {
        teamNames.add(game.team);
      }
    });
  });
  
  // Inicializar estatísticas para cada equipe
  const teamStats: Record<string, TeamStats> = {};
  Array.from(teamNames).forEach(name => {
    teamStats[name] = {
      id: name,
      name,
      points: 0,
      wins: 0,
      losses: 0,
      pointsScored: 0,
      pointsConceded: 0
    };
  });
  
  // Calcular estatísticas com base nos resultados
  journeys.forEach(journey => {
    journey.games.forEach(game => {
      if ('team1' in game && game.score1 !== undefined && game.score2 !== undefined) {
        // Adicionar pontos marcados e sofridos
        teamStats[game.team1].pointsScored += game.score1;
        teamStats[game.team1].pointsConceded += game.score2;
        teamStats[game.team2].pointsScored += game.score2;
        teamStats[game.team2].pointsConceded += game.score1;
        
        // Vitória time 1
        if (game.score1 > game.score2) {
          teamStats[game.team1].points += 3;
          teamStats[game.team1].wins += 1;
          teamStats[game.team2].losses += 1;
        }
        // Vitória time 2
        else if (game.score1 < game.score2) {
          teamStats[game.team2].points += 3;
          teamStats[game.team2].wins += 1;
          teamStats[game.team1].losses += 1;
        }
      }
    });
  });
  
  // Converter para array e ordenar por pontos, depois por pontos marcados, depois por pontos sofridos (inverso)
  const teams = Object.values(teamStats).sort((a, b) => {
    // Primeiro critério: pontos
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    // Segundo critério: pontos marcados
    if (b.pointsScored !== a.pointsScored) {
      return b.pointsScored - a.pointsScored;
    }
    // Terceiro critério: pontos sofridos (menos é melhor)
    return a.pointsConceded - b.pointsConceded;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation />

      <main className="mt-16 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium mb-4">Classificação</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">Classificação atual baseada em pontos.</p>
        </div>

        {/* Top 3 Podium */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-4 mb-16 max-w-4xl mx-auto px-4">
          {/* 2nd Place */}
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <div className="glassmorphism-strong podium-card rounded-t-xl h-[180px] flex flex-col items-center justify-end p-4 silver-gradient bg-opacity-10">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-2 border border-white/50">
                <Medal className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">{teams[1]?.name || "—"}</h3>
              <p className="text-3xl font-bold">{teams[1]?.points || 0}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">pontos</p>
            </div>
            <div className="h-20 bg-slate-300/50 dark:bg-slate-700/30 rounded-b-xl border-t-0 border border-white/30 dark:border-white/10"></div>
          </div>

          {/* 1st Place */}
          <div className="w-full md:w-1/3 order-1 md:order-2">
            <div className="glassmorphism-strong podium-card rounded-t-xl h-[220px] flex flex-col items-center justify-end p-4 gold-gradient bg-opacity-10">
              <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center mb-2 border border-white/50">
                <Trophy className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-medium">{teams[0]?.name || "—"}</h3>
              <p className="text-4xl font-bold">{teams[0]?.points || 0}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">pontos</p>
            </div>
            <div className="h-28 bg-slate-300/50 dark:bg-slate-700/30 rounded-b-xl border-t-0 border border-white/30 dark:border-white/10"></div>
          </div>

          {/* 3rd Place */}
          <div className="w-full md:w-1/3 order-3">
            <div className="glassmorphism-strong podium-card rounded-t-xl h-[150px] flex flex-col items-center justify-end p-4 bronze-gradient bg-opacity-10">
              <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center mb-2 border border-white/50">
                <Award className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-lg font-medium">{teams[2]?.name || "—"}</h3>
              <p className="text-2xl font-bold">{teams[2]?.points || 0}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">pontos</p>
            </div>
            <div className="h-16 bg-slate-300/50 dark:bg-slate-700/30 rounded-b-xl border-t-0 border border-white/30 dark:border-white/10"></div>
          </div>
        </div>

        {/* Full Standings Table */}
        <div className="max-w-3xl mx-auto glassmorphism rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200/50 dark:border-slate-700/50 bg-white/20 dark:bg-slate-800/20">
                  <th className="text-left py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Posição</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Equipa</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Pontos</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">PM</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">PS</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">V</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">D</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr
                    key={team.id}
                    className={`border-b border-slate-200/30 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/30 ${
                      index < 3 ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-medium">{index + 1}</td>
                    <td className="py-3 px-4 font-medium">{team.name}</td>
                    <td className="py-3 px-4 text-center font-bold">{team.points}</td>
                    <td className="py-3 px-4 text-center">{team.pointsScored}</td>
                    <td className="py-3 px-4 text-center">{team.pointsConceded}</td>
                    <td className="py-3 px-4 text-center">{team.wins}</td>
                    <td className="py-3 px-4 text-center">{team.losses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Legenda */}
          <div className="p-4 text-sm text-slate-500 dark:text-slate-400 bg-white/10 dark:bg-slate-800/10 border-t border-slate-200/30 dark:border-slate-700/30">
            <p>PM: Pontos Marcados | PS: Pontos Sofridos | V: Vitórias | D: Derrotas</p>
          </div>
        </div>
      </main>
    </div>
  )
}

