"use client"

import { useState } from "react"
import { ChevronDown, Zap } from "lucide-react"

const services = [
  "Artificial Intelligence",
  "Cloud",
  "Consulting",
  "Cybersecurity",
  "Cognitive Business Operations",
  "Data & Analytics",
  "Enterprise Solutions",
  "Network Solutions & Services",
]

const industries = [
  "E-commerce",
  "Transportation & Logistics",
  "Research and Development",
  "HealthCare",
  "Consulting",
  "Software and Platforms",
  "Ed-tech/Education",
  "Government & Public Services",
  "Recruitment",
  "Communications and Media",
  "High Tech",
  "Banking",
]

export function Header() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <header className="border-b border-border bg-background px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/wyreflow-logo.png" alt="Wyreflow" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight">wyreflow</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>

          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Services <ChevronDown size={16} />
            </button>
            {openMenu === "services" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg p-2 max-h-96 overflow-y-auto">
                {services.map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "industries" ? null : "industries")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Industries <ChevronDown size={16} />
            </button>
            {openMenu === "industries" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg p-2 max-h-96 overflow-y-auto">
                {industries.map((industry) => (
                  <a
                    key={industry}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded transition-colors"
                  >
                    {industry}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </header>
  )
}
