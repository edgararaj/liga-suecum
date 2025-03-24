import Navigation from "@/components/navigation"
import { Trophy, Medal, Award } from "lucide-react"

// Mock data for the leaderboard
const teams = [
  { id: 1, name: "Ace Spades", points: 28, wins: 9, losses: 2, draws: 1 },
  { id: 2, name: "Royal Flush", points: 25, wins: 8, losses: 3, draws: 1 },
  { id: 3, name: "Card Sharks", points: 22, wins: 7, losses: 4, draws: 1 },
  { id: 4, name: "Deck Masters", points: 19, wins: 6, losses: 5, draws: 1 },
  { id: 5, name: "Wild Jokers", points: 16, wins: 5, losses: 6, draws: 1 },
  { id: 6, name: "Full House", points: 13, wins: 4, losses: 7, draws: 1 },
  { id: 7, name: "Diamond Kings", points: 10, wins: 3, losses: 8, draws: 1 },
  { id: 8, name: "Heart Breakers", points: 7, wins: 2, losses: 9, draws: 1 },
]

export default function Leaderboard() {
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
                <Medal className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-medium">{teams[1].name}</h3>
              <p className="text-3xl font-bold">{teams[1].points}</p>
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
              <h3 className="text-xl font-medium">{teams[0].name}</h3>
              <p className="text-4xl font-bold">{teams[0].points}</p>
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
              <h3 className="text-lg font-medium">{teams[2].name}</h3>
              <p className="text-2xl font-bold">{teams[2].points}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">pontos</p>
            </div>
            <div className="h-16 bg-slate-300/50 dark:bg-slate-700/30 rounded-b-xl border-t-0 border border-white/30 dark:border-white/10"></div>
          </div>
        </div>

        {/* Full Standings Table */}
        <div className="max-w-2xl mx-auto glassmorphism rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200/50 dark:border-slate-700/50 bg-white/20 dark:bg-slate-800/20">
                  <th className="text-left py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Posição</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Equipa</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Pontos</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">V</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">D</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500 dark:text-slate-400">E</th>
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
                    <td className="py-3 px-4 text-center">{team.wins}</td>
                    <td className="py-3 px-4 text-center">{team.losses}</td>
                    <td className="py-3 px-4 text-center">{team.draws}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

