"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MapPin, Briefcase, Layers, Database, Cloud } from "lucide-react"

// Usamos las URLs de los logos oficiales en alta resolución (SVG)
const frontendTech = [
  { name: "Angular", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg", tooltip: "Framework principal para frontend" },
  { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", tooltip: "Estructura semántica moderna" },
  { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", tooltip: "Estilos avanzados y animaciones" },
  { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", tooltip: "Utility-first CSS framework" },
]

const backendTech = [
  { name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", tooltip: "Arquitectura de microservicios" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", tooltip: "Lenguaje principal de backend" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", tooltip: "Base de datos relacional" },
  { name: "Oracle Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg", tooltip: "Sistema operativo empresarial" },
  { name: "Microsoft Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", tooltip: "Plataforma cloud principal" },
]

export function About() {
  return (
    <TooltipProvider delayDuration={100}>
      <section id="sobre-mi" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mí & Tech Stack</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combinando pasión por la tecnología con buenas prácticas de desarrollo
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Profile Card - Terminal Style */}
            <ScrollReveal delay={100} className="lg:col-span-2">
              <Card className="h-full group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">axel@portfolio ~ </span>
                </div>
                
                <CardContent className="p-6 lg:p-8">
                  <div className="font-mono text-sm leading-relaxed space-y-3">
                    <p className="text-muted-foreground">
                      <span className="text-green-400">$</span> cat perfil.txt
                    </p>
                    <div className="pl-4 border-l-2 border-primary/30 space-y-3">
                      <p className="text-foreground/90">
                        Soy un desarrollador Full Stack al que le gusta resolver problemas reales con código. Me dedico a construir sistemas a medida y plataformas de gestión que las empresas realmente necesitan usar en su día a día.
                      </p>
                      <p className="text-foreground/90">
                        Mi objetivo siempre es el mismo: entregar aplicaciones rápidas, seguras y que estén listas para crecer junto con el negocio, sin dar dolores de cabeza.
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground mt-6">
                      <span className="text-green-400">$</span> echo $UBICACION $SECTOR
                    </p>
                    <div className="flex flex-wrap gap-4 text-foreground/80 pl-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Lima, Perú</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span>Desarrollo de Software & Soluciones B2B</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground flex items-center gap-1 mt-4">
                      <span className="text-green-400">$</span> 
                      <span className="w-2 h-4 bg-primary animate-pulse" />
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Frontend Card */}
            <ScrollReveal delay={200}>
              <Card className="h-full group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Frontend</h3>
                      <p className="text-muted-foreground text-sm">Interfaces modernas</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {frontendTech.map((tech) => (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <Badge 
                            variant="secondary"
                            className="px-3 py-1.5 bg-secondary/50 hover:bg-primary/20 hover:border-primary/30 border border-border/50 transition-all duration-300 cursor-default flex items-center"
                          >
                            <img src={tech.iconUrl} alt={`Logo de ${tech.name}`} className="w-4 h-4 mr-1.5 drop-shadow-sm" />
                            {tech.name}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Backend Card - Spans 2 columns */}
            <ScrollReveal delay={300} className="md:col-span-2 lg:col-span-2">
              <Card className="h-full group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Backend & Cloud</h3>
                      <p className="text-muted-foreground text-sm">Infraestructura escalable</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {backendTech.map((tech) => (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <Badge 
                            variant="secondary"
                            className="px-3 py-1.5 bg-secondary/50 hover:bg-primary/20 hover:border-primary/30 border border-border/50 transition-all duration-300 cursor-default flex items-center"
                          >
                            <img src={tech.iconUrl} alt={`Logo de ${tech.name}`} className="w-4 h-4 mr-1.5 drop-shadow-sm" />
                            {tech.name}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Cloud Focus Card */}
            <ScrollReveal delay={400}>
              <Card className="h-full group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Cloud Native</h3>
                      <p className="text-muted-foreground text-sm">Enfoque moderno</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    Desarrollo de aplicaciones cloud-native con Microsoft Azure, 
                    implementando CI/CD y arquitecturas de microservicios.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}