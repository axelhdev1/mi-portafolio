"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("proyectos")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const el = document.getElementById("contacto")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Radial cyan glow behind the name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,rgba(6,182,212,0.05)_30%,transparent_70%)] blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Subtle label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm shadow-inner shadow-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">Disponible para proyectos</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Axel Yull</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent drop-shadow-sm">
              Huatuco Bravo
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Desarrollador de Software especializado en crear sistemas a medida y soluciones web escalables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
            >
              Explorar Proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* CORRECCIÓN: Forzamos el texto blanco (text-foreground) y que se ponga cian en el hover */}
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group border border-border/50 bg-secondary/20 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Contactar
            </Button>

            {/* Hice lo mismo con el CV para asegurar que no falle */}
            <Button 
              size="lg" 
              asChild
              className="group border border-border/30 bg-transparent text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <a href="/cv.pdf" download="CV_Axel_Huatuco.pdf">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}