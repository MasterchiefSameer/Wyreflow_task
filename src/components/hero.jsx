export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">About</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Shaping the Future Through Design & Strategy
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          We believe in creating transformative experiences that drive meaningful impact for brands and their audiences
          worldwide.
        </p>

        <div className="relative w-full h-96 md:h-96 rounded-2xl overflow-hidden">
          <image
            src="/modern-office-collaboration-team-working-together.jpg"
            alt="Team collaboration"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
