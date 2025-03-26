import Navigation from "@/components/navigation";
import GameList from "@/app/components/game-list";
import { loadTournamentData, getCompletedGames } from "@/app/lib/game-utils";

export default function PastGames() {
  // Load and filter data for completed games
  const allJourneys = loadTournamentData();
  const completedJourneys = getCompletedGames(allJourneys);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation />
      <GameList
        journeys={completedJourneys}
        title="Jogos Anteriores"
        description="Revê jogos concluídos e seus resultados."
      />
    </div>
  );
}
