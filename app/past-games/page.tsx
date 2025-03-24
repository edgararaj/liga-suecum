import Navigation from "@/components/navigation"

// Mock data for past games organized by journeys
const journeys = [
  {
    id: 1,
    title: "1ª jornada: 1 de março - 9 de março",
    games: [
      {
        id: 1,
        team1: "Ace Spades",
        team2: "Royal Flush",
        score1: 3,
        score2: 1,
      },
      {
        id: 2,
        team1: "Card Sharks",
        team2: "Deck Masters",
        score1: 2,
        score2: 2,
      },
      {
        id: 3,
        team1: "Wild Jokers",
        team2: "Full House",
        score1: 0,
        score2: 2,
      },
      {
        id: 4,
        team1: "Diamond Kings",
        team2: "Heart Breakers",
        score1: 1,
        score2: 3,
      },
    ],
  },
  {
    id: 2,
    title: "2ª jornada: 10 de março - 20 de março",
    games: [
      {
        id: 5,
        team1: "Ace Spades",
        team2: "Card Sharks",
        score1: 2,
        score2: 0,
      },
      {
        id: 6,
        team1: "Royal Flush",
        team2: "Deck Masters",
        score1: 1,
        score2: 1,
      },
      {
        id: 7,
        team1: "Wild Jokers",
        team2: "Diamond Kings",
        score1: 3,
        score2: 2,
      },
      {
        id: 8,
        team1: "Full House",
        team2: "Heart Breakers",
        score1: 0,
        score2: 3,
      },
    ],
  },
  {
    id: 3,
    title: "3ª jornada: 21 de março - 30 de março",
    games: [
      {
        id: 9,
        team1: "Ace Spades",
        team2: "Deck Masters",
        score1: 3,
        score2: 0,
      },
      {
        id: 10,
        team1: "Royal Flush",
        team2: "Wild Jokers",
        score1: 2,
        score2: 2,
      },
      {
        id: 11,
        team1: "Card Sharks",
        team2: "Heart Breakers",
        score1: 1,
        score2: 2,
      },
      {
        id: 12,
        team1: "Diamond Kings",
        team2: "Full House",
        score1: 3,
        score2: 1,
      },
    ],
  },
]

export default function PastGames() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Navigation />

      <main className="mt-16 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium mb-4">Jogos Anteriores</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Revê jogos concluídos e seus resultados.
          </p>
        </div>

        <div className="space-y-20">
          {journeys.map((journey) => (
            <div key={journey.id} className="flex flex-col items-center">
              <h2 className="text-xl font-medium mb-10 text-center">{journey.title}</h2>

              <div className="w-full max-w-md space-y-6">
                {journey.games.map((game) => (
                  <div
                    key={game.id}
                    className="bg-slate-200 dark:bg-slate-800 rounded-full py-4 px-6 flex items-center justify-between"
                  >
                    <div className="text-base font-medium w-1/3 text-left">{game.team1}</div>
                    <div className="text-base font-medium w-1/3 text-center">
                      {game.score1} - {game.score2}
                    </div>
                    <div className="text-base font-medium w-1/3 text-right">{game.team2}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

