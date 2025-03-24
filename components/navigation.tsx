"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Scheduled Games", path: "/scheduled-games" },
    { name: "Past Games", path: "/past-games" },
  ]

  return (
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-medium text-primary">CardTourney</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                pathname === route.path
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/5",
              )}
            >
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
                  "px-4 py-2 rounded-full text-sm transition-colors",
                  pathname === route.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

