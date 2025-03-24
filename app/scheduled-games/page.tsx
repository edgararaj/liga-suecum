import Navigation from "@/components/navigation";
import GameList from "@/app/components/game-list";
import { loadTournamentData, getUpcomingGames } from "@/app/lib/game-utils";

export default function ScheduledGames() {
  // Load and filter data for upcoming games
  const allJourneys = loadTournamentData();
  const upcomingJourneys = getUpcomingGames(allJourneys);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Navigation />
      <GameList 
        journeys={upcomingJourneys}
        title="Jogos Agendados"
        description="Consulta os próximos jogos e seus períodos."
      />
    </div>
  );
}

