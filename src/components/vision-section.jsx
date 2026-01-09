import { Eye, Compass, Heart } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h3 className="text-sm font-medium text-accent uppercase tracking-widest mb-6">Foundation</h3>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <div className="text-muted-foreground mb-2 flex items-center gap-3">
                <Eye size={36} className="text-accent" />
                Vision
              </div>
              <div className="text-muted-foreground mb-2 flex items-center gap-3">
                <Compass size={36} className="text-accent" />
                Purpose
              </div>
              <div className="flex items-center gap-3">
                <Heart size={36} className="text-accent" />
                Values
              </div>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where thoughtful design and strategic innovation transform industries and improve
              lives. Everything we do is guided by our commitment to excellence, integrity, and meaningful impact.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="/abstract-colorful-spherical-artistic-design.jpg"
                alt="Vision illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-center text-muted-foreground mt-12 text-lg leading-relaxed max-w-sm">
              We will continue to rise as a forward-thinking, human-centered, and impact-driven organization delivering
              excellence in all we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
