"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react"

export function Footer() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    
    alert("¡Mensaje enviado con éxito!")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <footer id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escucharte.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Card */}
        <ScrollReveal delay={100}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-xl font-semibold">Envíame un mensaje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Direct Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <a
                href="mailto:axelhuatuco@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>axelhuatuco@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a
                href="tel:+51953053198"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>+51 953 053 198</span>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/80">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/80">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          </Card>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={200}>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-border/50 bg-secondary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-border/50 bg-secondary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Axel Yull Huatuco Bravo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
