import fs from 'fs';
import path from 'path';
import Navigation from "@/components/navigation";
import { Game, Journey } from "../types/schedule";

export default function ScheduledGames() {
  // Carregar dados do calendário com resultados
  const schedulePath = path.join(process.cwd(), 'public', 'tournament_schedule.json');
  const scheduleContents = fs.readFileSync(schedulePath, 'utf8');
  const journeys: Journey[] = JSON.parse(scheduleContents);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Navigation />

      <main className="mt-16 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium mb-4">Jogos Agendados</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Consulta os próximos jogos e seus períodos.
          </p>
        </div>

        <div className="space-y-20">
          {journeys.map((journey, journeyIndex) => (
            <div key={journeyIndex} className="flex flex-col items-center">
              <h2 className="text-xl font-medium mb-10 text-center">
                {`${journeyIndex + 1}ª jornada: ${journey.startDate} - ${journey.endDate}`}
              </h2>

              <div className="w-full max-w-md space-y-6">
                {journey.games.map((game, gameIndex) => (
                  <div key={gameIndex}>
                    {/* Regular game */}
                    {!('bye' in game) && (
                      <div className="bg-slate-200 dark:bg-slate-800 rounded-full py-4 px-6 flex items-center justify-between">
                        <div className="text-base font-medium w-1/3 text-left">{game.team1}</div>
                        <div className="text-base font-medium w-1/3 text-center">
                          {game.score1 !== undefined && game.score2 !== undefined 
                            ? `${game.score1} - ${game.score2}` 
                            : "x - x"}
                        </div>
                        <div className="text-base font-medium w-1/3 text-right">{game.team2}</div>
                      </div>
                    )}
                    
                    {/* Bye team */}
                    {'bye' in game && (
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-full py-4 px-6 flex items-center justify-between text-slate-500 dark:text-slate-400">
                        <div className="text-base font-medium w-2/3 text-left">{game.team}</div>
                        <div className="text-sm w-1/3 text-right">Não joga nesta jornada</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

