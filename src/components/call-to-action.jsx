import { ArrowRight, Handshake } from "lucide-react"

export function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <Handshake size={200} className="absolute top-1/4 left-1/4 text-white" />
          <Handshake size={150} className="absolute bottom-1/4 right-1/4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Where Vision Meets Action</h2>

        <p className="text-lg md:text-xl text-gray-100 mb-12 leading-relaxed">
          Join us on a journey to create meaningful change. Together, we'll build something remarkable.
        </p>

        <button className="px-8 py-4 bg-white text-background font-semibold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
          Start Your Journey
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}
