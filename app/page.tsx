import Link from "next/link"
import Navigation from "@/components/navigation"
import { Trophy, Calendar, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation />

      <main className="mt-16 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Liga SuecUM</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Acompanha classificações, jogos futuros e resultados.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
          <Link href="/leaderboard" className="w-full">
            <div className="glassmorphism-card rounded-xl p-6 hover:bg-white/50 dark:hover:bg-slate-900/40 transition-all flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-white/50">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-1">Classificação</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Vê quem lidera o torneio.</p>
              </div>
            </div>
          </Link>

          <Link href="/scheduled-games" className="w-full">
            <div className="glassmorphism-card rounded-xl p-6 hover:bg-white/50 dark:hover:bg-slate-900/40 transition-all flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-white/50">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-1">Jogos Agendados</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Consulta os próximos jogos e seus horários.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/past-games" className="w-full">
            <div className="glassmorphism-card rounded-xl p-6 hover:bg-white/50 dark:hover:bg-slate-900/40 transition-all flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-white/50">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-1">Jogos Anteriores</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Revê jogos concluídos e resultados.</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

