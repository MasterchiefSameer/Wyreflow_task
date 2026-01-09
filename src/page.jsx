import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { AtAGlance } from "./components/at-a-glance"
import { VisionSection } from "./components/vision-section"
import { CallToAction } from "./components/call-to-action"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <AtAGlance />
      <VisionSection />
      <CallToAction />
      <Footer />
    </main>
  )
}
