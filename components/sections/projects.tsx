"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Aquí usamos los logos oficiales y nítidos
const techImageMap: Record<string, string> = {
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
}

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  images: string[]
  githubUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma Fintech para Independientes",
    description: "Aplicación financiera orientada a trabajadores independientes en el Perú. Desarrollada bajo una arquitectura de microservicios con enfoque en escalabilidad y alta disponibilidad.",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Azure"],
    images: [
      "/proyectos/fintech-1.jpg",
      "/proyectos/fintech-2.jpg",
      "/proyectos/fintech-3.jpg",
    ],
    githubUrl: "https://github.com/phuatuco",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Sistema",
    description: "Sistema progresivo diseñado para la gestión de impuestos. Incluye cálculo automático de tributos, generación de declaraciones y sincronización offline.",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Azure"],
    images: [
      "/proyectos/sunat-1.jpg",
      "/proyectos/sunat-2.jpg",
      "/proyectos/sunat-3.jpg",
    ],
    githubUrl: "https://github.com/phuatuco",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Sistema POS Modular para Farmacias",
    description: "Plataforma integral para la gestión de inventario y punto de venta en tiempo real. Control de stock, alertas de vencimiento, reportes de ventas y gestión de proveedores.",
    tech: ["Angular", "Spring Boot"],
    images: [
      "/proyectos/pos-1.jpg",
      "/proyectos/pos-2.jpg",
      "/proyectos/pos-3.jpg",
    ],
    githubUrl: "https://github.com/phuatuco",
    demoUrl: "#",
  },
]

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const [selectedImage, setSelectedImage] = React.useState(0)

  // Funciones para las flechas
  const nextImage = () => setSelectedImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center group transition-transform duration-500 hover:-translate-y-2",
        reverse && "lg:flex-row-reverse"
      )}
    >
      {/* Galería de Imágenes */}
      <div className={cn("space-y-4", reverse && "lg:order-2")}>
        
        {/* Imagen Principal */}
        <Card className="relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm group-hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted/20">
            <img
              src={project.images[selectedImage]}
              alt={`${project.title} - Vista ${selectedImage + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Botones de Navegación (Flechas) */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-colors z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-colors z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </Card>

        {/* Miniaturas */}
        <div className="flex gap-3 justify-center">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 transform hover:scale-110",
                selectedImage === index
                  ? "border-primary shadow-lg shadow-primary/25"
                  : "border-border/50 hover:border-primary/50 opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={image}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className={cn("space-y-6", reverse && "lg:order-1")}>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {project.description}
          </p>
        </div>

        {/* Tech Stack con iconos en alta resolución */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => {
            const iconUrl = techImageMap[tech]
            return (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/40 text-primary bg-primary/10 hover:bg-primary/25 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 cursor-default flex items-center"
              >
                {iconUrl && (
                  <img 
                    src={iconUrl} 
                    alt={`Logo de ${tech}`} 
                    className="w-5 h-5 mr-2.5 drop-shadow-sm" 
                  />
                )}
                {tech}
              </Badge>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            variant="outline"
            className="group/btn border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-125 group-hover/btn:text-primary" />
              Ver Código
            </a>
          </Button>
          <Button
            className="group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-125" />
              Visitar Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones end-to-end que combinan diseño intuitivo con arquitecturas escalables
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard
                project={project}
                reverse={index % 2 === 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}