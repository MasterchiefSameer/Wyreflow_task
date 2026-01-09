"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

const sections = [
  {
    title: "Our Philosophy",
    subtitle: "Crafting Remarkable Experiences",
    description:
      "We believe every interaction is an opportunity to create value. Our approach combines strategic thinking with creative excellence to deliver solutions that matter.",
    image: "/creative-team-brainstorming-session.jpg",
  },
  {
    title: "Our Expertise",
    subtitle: "Decades of Combined Excellence",
    description:
      "With deep expertise across strategy, design, and technology, we guide brands through complex challenges and unlock their full potential.",
    image: "/professional-designer-working-on-digital-interface.jpg",
  },
  {
    title: "Our Impact",
    subtitle: "Results That Matter",
    description:
      "We measure success through tangible outcomes—from increased engagement to accelerated growth. Our clients see real, measurable results.",
    image: "/business-growth-charts-analytics-dashboard.jpg",
  },
  {
    title: "Our Culture",
    subtitle: "Innovation Meets Collaboration",
    description:
      "Our diverse team thrives on curiosity, creativity, and collaboration. We foster an environment where bold ideas become transformative realities.",
    image: "/diverse-team-laughing-together-in-modern-office.jpg",
  },
]

export function AtAGlance() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = sections[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sections.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length)
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Wyreflow at a Glance</h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        {/* Tabs */}
        <div
          className="flex gap-6 md:gap-12 mb-12 overflow-x-auto pb-4 border-b"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-sm md:text-base font-medium whitespace-nowrap pb-4 transition-colors ${
                activeIndex === index
                  ? "text-foreground border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{current.subtitle}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{current.description}</p>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <img src={current.image || "./placeholder.svg"} alt={current.subtitle} className="w-full h-full object-cover" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 justify-center md:justify-end">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border hover:bg-muted transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border hover:bg-muted transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicator */}
            <div className="text-center text-sm text-muted-foreground mt-4">
              {String(activeIndex + 1).padStart(2, "0")} — {String(sections.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
