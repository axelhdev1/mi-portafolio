"use client"

const technologies = [
  "Angular",
   "React",
  "Spring Boot", 
  "PostgreSQL",
  "Microsoft Azure",
  "Oracle Linux",
  "Tailwind CSS",
  "PWA",
  "ITIL",
  "Java",
  "HTML5",
  "CSS3",
]

export function Marquee() {
  return (
    <div className="relative py-6 border-y border-border/30 bg-secondary/10 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Scrolling content */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="mx-8 text-sm font-medium text-muted-foreground/60 uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
