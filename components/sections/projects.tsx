"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  AngularIcon,
  SpringBootIcon,
  PostgreSQLIcon,
  AzureIcon,
} from "@/components/ui/tech-icons"

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Angular": AngularIcon,
  "Spring Boot": SpringBootIcon,
  "PostgreSQL": PostgreSQLIcon,
  "Azure": AzureIcon,
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
    title: "PWA Gestión Tributaria (SUNAT)",
    description: "Sistema progresivo diseñado para la gestión de impuestos de trabajadores independientes en Perú. Incluye cálculo automático de tributos, generación de declaraciones y sincronización offline.",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Azure"],
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Sistema POS Modular para Farmacias",
    description: "Plataforma integral para la gestión de inventario y punto de venta en tiempo real. Control de stock, alertas de vencimiento, reportes de ventas y gestión de proveedores.",
    tech: ["Angular", "Spring Boot"],
    images: [
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Plataforma E-business Nativa",
    description: "Desarrollo de modelo de negocio digital con dependencia absoluta de conectividad web. Integración de pagos, gestión de usuarios y analytics en tiempo real.",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
]

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const [selectedImage, setSelectedImage] = React.useState(0)

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
        reverse && "lg:flex-row-reverse"
      )}
    >
      {/* Image Gallery */}
      <div className={cn("space-y-4", reverse && "lg:order-2")}>
        {/* Main Image Carousel */}
        <Card className="overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm group hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${project.title} - Vista ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/20 hover:border-primary/50" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/20 hover:border-primary/50" />
          </Carousel>
        </Card>

        {/* Thumbnails */}
        <div className="flex gap-3 justify-center">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300",
                selectedImage === index
                  ? "border-primary shadow-lg shadow-primary/25"
                  : "border-border/50 hover:border-primary/50 opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={image}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className={cn("space-y-6", reverse && "lg:order-1")}>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => {
            const IconComponent = techIconMap[tech]
            return (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1.5 border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                {IconComponent && <IconComponent className="w-4 h-4 mr-1.5" />}
                {tech}
              </Badge>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            variant="outline"
            className="group border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Ver Código
            </a>
          </Button>
          <Button
            className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
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
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones end-to-end que combinan diseño intuitivo con arquitecturas escalables
            </p>
          </div>
        </ScrollReveal>

        {/* Projects List with Z-Pattern */}
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
