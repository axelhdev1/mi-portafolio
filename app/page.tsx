import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { Marquee } from "@/components/sections/marquee"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Footer } from "@/components/sections/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
