import { Journey, Game } from '../types/schedule';
import { getOrdinal } from '../lib/game-utils';

interface GameListProps {
  journeys: Journey[];
  title: string;
  description: string;
}

export default function GameList({ journeys, title, description }: GameListProps) {
  // Early return if no journeys to display
  if (journeys.length === 0) {
    return (
      <main className="mt-16 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium mb-4">{title}</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            {description}
          </p>
        </div>
        
        <div className="text-center text-slate-500 dark:text-slate-400 py-12">
          Nenhum jogo para exibir no momento.
        </div>
      </main>
    );
  }

  return (
    <main className="mt-16 mb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-medium mb-4">{title}</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          {description}
        </p>
      </div>

      <div className="space-y-20">
        {journeys.map((journey, journeyIndex) => {
          // Check if there are any non-bye games in this journey
          const hasRegularGames = journey.games.some(game => !('bye' in game));
          
          // Skip rendering this journey if it only contains bye teams
          if (!hasRegularGames) return null;
          
          return (
            <div key={journeyIndex} className="flex flex-col items-center">
              <h2 className="text-xl font-medium mb-10 text-center">
                {`${journeyIndex + 1}ª jornada`}
                {journey.startDate !== "<to be filled>" && (
                  <span> : {journey.startDate} - {journey.endDate}</span>
                )}
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
          );
        })}
      </div>
    </main>
  );
} 