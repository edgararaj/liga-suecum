import Navigation from "@/components/navigation"

// Mock data for scheduled games organized by journeys
const journeys = [
  {
    id: 1,
    title: "1st journey : 1st april - 9th april",
    games: [
      {
        id: 1,
        team1: "Ace Spades",
        team2: "Royal Flush",
      },
      {
        id: 2,
        team1: "Card Sharks",
        team2: "Deck Masters",
      },
      {
        id: 3,
        team1: "Wild Jokers",
        team2: "Full House",
      },
      {
        id: 4,
        team1: "Diamond Kings",
        team2: "Heart Breakers",
      },
    ],
  },
  {
    id: 2,
    title: "2nd journey : 10th april - 20th april",
    games: [
      {
        id: 5,
        team1: "Ace Spades",
        team2: "Card Sharks",
      },
      {
        id: 6,
        team1: "Royal Flush",
        team2: "Deck Masters",
      },
      {
        id: 7,
        team1: "Wild Jokers",
        team2: "Diamond Kings",
      },
      {
        id: 8,
        team1: "Full House",
        team2: "Heart Breakers",
      },
    ],
  },
  {
    id: 3,
    title: "3rd journey : 21st april - 30th april",
    games: [
      {
        id: 9,
        team1: "Ace Spades",
        team2: "Deck Masters",
      },
      {
        id: 10,
        team1: "Royal Flush",
        team2: "Wild Jokers",
      },
      {
        id: 11,
        team1: "Card Sharks",
        team2: "Heart Breakers",
      },
      {
        id: 12,
        team1: "Diamond Kings",
        team2: "Full House",
      },
    ],
  },
]

export default function ScheduledGames() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-slate-900 min-h-screen">
      <Navigation />

      <main className="mt-16 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-primary mb-4">Scheduled Games</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            View upcoming matches and their timeframes.
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
                    <div className="text-base font-medium w-1/3 text-center">x - x</div>
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

