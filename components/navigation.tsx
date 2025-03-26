"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Trophy, Calendar, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Início", path: "/", icon: Home },
    { name: "Classificação", path: "/leaderboard", icon: Trophy },
    { name: "Jogos Agendados", path: "/scheduled-games", icon: Calendar },
    { name: "Jogos Anteriores", path: "/past-games", icon: Clock },
    { name: "Regras", path: "/regras", icon: BookOpen },
  ]

  return (
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-medium text-lg">Liga SuecUM</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2",
                pathname === route.path
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/5",
              )}
            >
              {route.icon && <route.icon className="h-4 w-4" />}
              {route.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 glassmorphism rounded-xl p-2">
          <div className="flex flex-col space-y-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2",
                  pathname === route.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.icon && <route.icon className="h-4 w-4" />}
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

