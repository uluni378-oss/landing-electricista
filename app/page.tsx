"use client";

import { useState } from "react";
import { 
  Zap, 
  Clock, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Wrench,
  Home as HomeIcon,
  Lightbulb,
  Plug,
  Bolt,
  ChevronRight,
  Facebook,
  Instagram,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  Eye,
  Sparkles,
  TrendingUp,
  FileText
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service.trim() || !formData.description.trim()) {
      alert("Por favor, completa todos los campos obligatorios del formulario.");
      return;
    }
    
    // Construct WhatsApp message exactly as requested
    const message = `Hola, solicito información.

Nombre: ${formData.name}
Teléfono: ${formData.phone}
Servicio: ${formData.service}
Descripción: ${formData.description}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/527472582898?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", phone: "", service: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Structured Data / JSON-LD for Local SEO
  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ERG Electricidad Residencial y Comercial",
    "image": "/hero_electrician_1782167817268.png",
    "@id": "https://pagina-electricista.vercel.app/#localbusiness",
    "url": "https://pagina-electricista.vercel.app",
    "telephone": "+527472582898",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Jesús de Nazareth, Colonia Candelaria",
      "addressLocality": "Chilpancingo de los Bravo",
      "addressRegion": "Guerrero",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.5516,
      "longitude": -99.5011
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.instagram.com"
    ]
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Ofrecen servicio a domicilio en todo Chilpancingo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, cubrimos todas las colonias de Chilpancingo de los Bravo, Guerrero, brindando atención rápida tanto a hogares como a negocios locales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo garantizan la seguridad de sus instalaciones eléctricas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos bajo estándares profesionales de seguridad, utilizando conductores de cobre certificados, canalizaciones adecuadas y herramientas con aislamiento profesional para prevenir cortocircuitos o sobrecargas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Tienen costo las visitas de diagnóstico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Realizamos una revisión detallada para identificar la falla de raíz. Te explicamos de manera clara el problema y te entregamos una cotización justa antes de iniciar cualquier reparación."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-dark-primary text-text font-sans antialiased selection:bg-accent selection:text-white">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-secondary/85 backdrop-blur-md border-b border-dark-border/40 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-accent/10 p-2.5 rounded-xl border border-accent/20 group-hover:bg-accent/20 transition-all duration-300">
                <Zap className="h-6 w-6 text-accent animate-pulse-slow" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-accent transition-colors duration-300">ERG Electricidad</span>
                <span className="text-[11px] text-text-muted font-medium tracking-wider uppercase">Residencial & Comercial</span>
              </div>
            </a>
            
            <div className="hidden md:flex items-center gap-8 font-medium">
              <a href="#servicios" className="text-text-muted hover:text-white transition-colors duration-200 text-sm">Servicios</a>
              <a href="#como-trabajamos" className="text-text-muted hover:text-white transition-colors duration-200 text-sm">¿Cómo trabajamos?</a>
              <a href="#beneficios" className="text-text-muted hover:text-white transition-colors duration-200 text-sm">Garantías de confianza</a>
              <a href="#galeria" className="text-text-muted hover:text-white transition-colors duration-200 text-sm">Proyectos reales</a>
              <a href="#faq" className="text-text-muted hover:text-white transition-colors duration-200 text-sm">Preguntas Frecuentes</a>
              <a 
                href="#contacto" 
                className="bg-accent text-white px-5 py-2.5 rounded-xl hover:bg-accent-light transition-all duration-300 text-sm font-semibold shadow-lg shadow-accent/15 hover:shadow-accent/25 border border-accent-light/10 hover:-translate-y-0.5"
              >
                Solicitar Diagnóstico
              </a>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-white hover:bg-dark-surface/50 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-secondary border-b border-dark-border/60 animate-fade-in-up">
            <div className="px-4 pt-2 pb-6 space-y-3">
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-text-muted hover:text-white hover:bg-dark-surface/40">Servicios</a>
              <a href="#como-trabajamos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-text-muted hover:text-white hover:bg-dark-surface/40">¿Cómo trabajamos?</a>
              <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-text-muted hover:text-white hover:bg-dark-surface/40">Garantías de confianza</a>
              <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-text-muted hover:text-white hover:bg-dark-surface/40">Proyectos reales</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-text-muted hover:text-white hover:bg-dark-surface/40">Preguntas Frecuentes</a>
              <div className="pt-2">
                <a 
                  href="#contacto" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-accent text-white px-4 py-3 rounded-xl text-center font-semibold shadow-lg shadow-accent/20 hover:bg-accent-light"
                >
                  Solicitar Diagnóstico
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-dark-secondary to-dark-primary">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-light text-xs font-semibold tracking-wide text-accent border border-accent/20">
                <Sparkles className="h-4 w-4" />
                <span>Electricista Profesional en Chilpancingo, Guerrero</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Instalaciones y Reparaciones Eléctricas <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">Seguras</span>
              </h1>
              
              <p className="text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Especialistas en diagnóstico de fallas, tableros eléctricos e iluminación residencial y comercial. Brindamos soluciones seguras bajo normas técnicas, con un trato limpio y honesto.
              </p>

              {/* Quick trust points */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 pt-2 text-left">
                <div className="flex items-center gap-2.5 text-sm text-text-muted">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span>Sin sorpresas en costos</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-text-muted">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span>Diagnóstico honesto</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-text-muted">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span>Orden y limpieza total</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="https://wa.me/527472582898" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-2xl hover:bg-whatsapp-light transition-all duration-300 font-bold text-lg shadow-xl shadow-whatsapp/10 hover:shadow-whatsapp/25 hover:-translate-y-0.5 group glow-whatsapp-hover"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  Enviar WhatsApp
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+527472582898" 
                  className="inline-flex items-center justify-center gap-3 bg-dark-secondary hover:bg-dark-surface text-white px-8 py-4 rounded-2xl border border-dark-border transition-all duration-300 font-bold text-lg hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5 text-accent animate-pulse" />
                  Llamar ahora
                </a>
              </div>
            </div>

            {/* Right Column (Visual Image Box) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                {/* Background decorative square */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-amber-500 rounded-3xl opacity-20 blur-lg" />
                
                {/* Main image container */}
                <div className="relative bg-dark-secondary border border-dark-border/80 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                  <img 
                    src="/hero_electrician_1782167817268.png" 
                    alt="Electricista profesional en Chilpancingo realizando trabajos de cableado y tableros con equipo de seguridad" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/20 to-transparent" />
                </div>

                {/* Floating trust badges */}
                <div className="absolute -bottom-6 -left-6 glass px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-accent/15 p-2 rounded-xl border border-accent/25">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Ubicación local</p>
                    <p className="text-sm font-bold text-white">Chilpancingo, Gro.</p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 glass px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="bg-whatsapp/15 p-2 rounded-xl border border-whatsapp/25">
                    <ShieldCheck className="h-6 w-6 text-whatsapp" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Atención Segura</p>
                    <p className="text-sm font-bold text-white">Norma NOM-001</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Real Benefits Section */}
      <section id="beneficios" className="py-20 bg-dark-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Compromisos de Confianza Reales
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Sin testimonios prefabricados. Nos ganamos tu confianza con hechos prácticos y garantías en cada visita técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-dark-primary border border-dark-border/40 p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center border border-accent/25">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white">Atención Local Rápida</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Vivimos y trabajamos en Chilpancingo. Respondemos ágilmente a tus mensajes y programamos visitas puntuales en toda la ciudad.
                </p>
              </div>
            </div>

            <div className="bg-dark-primary border border-dark-border/40 p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center border border-accent/25">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white">Diagnóstico Claro</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Te mostramos y explicamos el origen de la falla eléctrica antes de reparar. Sin diagnósticos complicados ni costos ocultos.
                </p>
              </div>
            </div>

            <div className="bg-dark-primary border border-dark-border/40 p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center border border-accent/25">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white">Trabajo 100% Seguro</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Aplicamos la norma oficial NOM-001-SEDE. Utilizamos materiales certificados de calidad que protegen tus equipos y a tu familia.
                </p>
              </div>
            </div>

            <div className="bg-dark-primary border border-dark-border/40 p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center border border-accent/25">
                  <Wrench className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white">Orden y Limpieza</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Respetamos tu espacio. Al terminar cualquier canalización o reparación, recogemos los residuos y dejamos el área limpia.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="como-trabajamos" className="py-20 bg-dark-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              ¿Cómo Trabajamos?
            </h2>
            <p className="text-lg text-text-muted">
              Nuestro proceso está diseñado para darte total claridad y tranquilidad desde el primer contacto.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dark-border/60 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              
              <div className="bg-dark-secondary border border-dark-border p-6 rounded-2xl text-center space-y-4 relative group">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/35 border-2 border-dark-primary">
                  1
                </div>
                <h3 className="text-xl font-bold text-white pt-2">Contacto</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Nos describes el problema o requerimiento por WhatsApp o llamada telefónica directa.
                </p>
              </div>

              <div className="bg-dark-secondary border border-dark-border p-6 rounded-2xl text-center space-y-4 relative group">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/35 border-2 border-dark-primary">
                  2
                </div>
                <h3 className="text-xl font-bold text-white pt-2">Diagnóstico</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Agendamos una visita a tu domicilio en Chilpancingo para revisar físicamente la instalación de forma segura.
                </p>
              </div>

              <div className="bg-dark-secondary border border-dark-border p-6 rounded-2xl text-center space-y-4 relative group">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/35 border-2 border-dark-primary">
                  3
                </div>
                <h3 className="text-xl font-bold text-white pt-2">Cotización</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Te detallamos los materiales necesarios y la mano de obra en un presupuesto justo, sin cargos ocultos.
                </p>
              </div>

              <div className="bg-dark-secondary border border-dark-border p-6 rounded-2xl text-center space-y-4 relative group">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/35 border-2 border-dark-primary">
                  4
                </div>
                <h3 className="text-xl font-bold text-white pt-2">Solución</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Realizamos el trabajo con orden, probamos la instalación frente a ti y entregamos la garantía por escrito.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-dark-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Servicios Eléctricos Especializados
            </h2>
            <p className="text-lg text-text-muted">
              Soluciones integrales con herramientas profesionales para residencias y comercios en Chilpancingo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-dark-primary border border-dark-border/40 p-8 rounded-3xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="space-y-5">
                <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-300">
                  <HomeIcon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">Instalaciones Residenciales</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Diseño y cableado eléctrico completo para casas nuevas o ampliaciones. Instalación segura de contactos, interruptores y centros de carga.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-dark-border/30 mt-6 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Cableado general certificado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Instalación de centros de carga
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Ranurado y entubado oculto
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-dark-primary border border-dark-border/40 p-8 rounded-3xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="space-y-5">
                <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-300">
                  <Lightbulb className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">Iluminación LED Inteligente</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Instalación y modernización de sistemas de iluminación LED para optimizar el consumo de energía en salas, cocinas, patios y fachadas.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-dark-border/30 mt-6 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Luminarias empotradas y plafones
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Reflectores exteriores y jardín
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Sensores de movimiento y timers
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-dark-primary border border-dark-border/40 p-8 rounded-3xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="space-y-5">
                <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-300">
                  <Wrench className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">Diagnóstico y Reparación</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Localización rápida de cortos circuitos, sobrecalentamiento de líneas, variaciones de voltaje y fallas generales en contactos u apagadores.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-dark-border/30 mt-6 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Detección de fugas de corriente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Reparación de cortocircuitos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Cambio de breakers dañados
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-dark-primary border border-dark-border/40 p-8 rounded-3xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="space-y-5">
                <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-300">
                  <Plug className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">Mantenimiento de Tableros</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Limpieza y reajuste de conexiones en tableros eléctricos. Balanceo de cargas para evitar caídas de tensión y prolongar la vida útil de tus equipos.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-dark-border/30 mt-6 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Reajuste de apriete de bornes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Balanceo de circuitos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Actualización a tableros modernos
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-dark-primary border border-dark-border/40 p-8 rounded-3xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="space-y-5">
                <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-300">
                  <TrendingUp className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">Servicio Comercial</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Adecuación e instalaciones eléctricas seguras para locales comerciales, oficinas y negocios pequeños. Iluminación comercial llamativa y funcional.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-dark-border/30 mt-6 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Canalización visible tipo conduit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Instalación de tierras físicas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Circuitos dedicados para equipo comercial
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-dark-primary border border-dark-border/40 p-8 rounded-3xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="space-y-5">
                <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-300">
                  <Bolt className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">Atención Urgente</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  ¿Te quedaste sin luz en Chilpancingo? Acudimos rápidamente para restablecer tu servicio eléctrico de manera provisional o definitiva ante emergencias.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-dark-border/30 mt-6 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Detección inmediata de cortos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Reemplazo de fusibles dañados
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  Reconexión segura de líneas
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="galeria" className="py-20 bg-dark-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Garantía Visual: Proyectos Reales
            </h2>
            <p className="text-lg text-text-muted">
              Fotografías realistas que muestran el estándar y la calidad de nuestro trabajo técnico en Chilpancingo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-dark-border/60 shadow-lg aspect-video bg-dark-secondary">
              <img 
                src="/panel_installation_1782167887104.png" 
                alt="Instalación de tablero de distribución eléctrica residencial con breakers nuevos y cableado ordenado en Chilpancingo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/20 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Residencial</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">Instalación y Reordenamiento de Centro de Carga</h3>
                <p className="text-sm text-text-muted mt-1">Reemplazo de tablero antiguo por uno de protección térmica certificado.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-dark-border/60 shadow-lg aspect-video bg-dark-secondary">
              <img 
                src="/led_lighting_1782167897624.png" 
                alt="Modernización de iluminación de sala a tecnología LED empotrada en plafón" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/20 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Iluminación</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">Luminarias LED en Techo</h3>
                <p className="text-sm text-text-muted mt-1">Distribución uniforme y eficiente de luz empotrada en plafón residencial.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-dark-border/60 shadow-lg aspect-video bg-dark-secondary">
              <img 
                src="/commercial_service_1782167908707.png" 
                alt="Electricista inspeccionando circuitos de local comercial utilizando herramientas de medición" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/20 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Comercial</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">Mantenimiento de Línea de Distribución Comercial</h3>
                <p className="text-sm text-text-muted mt-1">Balanceo e instalación de circuitos dedicados en local comercial.</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-dark-border/60 shadow-lg aspect-video bg-dark-secondary">
              <img 
                src="/diagnostics_tools_1782167919424.png" 
                alt="Herramientas profesionales y multímetro digital utilizados para diagnóstico eléctrico seguro" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/20 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Diagnóstico</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">Detección Profesional de Fallas</h3>
                <p className="text-sm text-text-muted mt-1">Uso de equipo de medición calibrado para encontrar problemas de voltaje rápidamente.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-dark-secondary relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-text-muted">
              Respuestas claras a tus dudas sobre el servicio eléctrico en Chilpancingo.
            </p>
          </div>

          <div className="space-y-6">
            
            <div className="bg-dark-primary border border-dark-border p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">¿Ofrecen servicio a domicilio en todo Chilpancingo?</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Sí, cubrimos todas las colonias de Chilpancingo de los Bravo, Guerrero. Coordinamos visitas puntuales para evaluar e identificar problemas en tu instalación directamente en tu domicilio o local comercial.
              </p>
            </div>

            <div className="bg-dark-primary border border-dark-border p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">¿Cómo garantizan la seguridad de sus instalaciones eléctricas?</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Trabajamos bajo estándares profesionales de seguridad, aplicando la norma oficial NOM-001-SEDE. Utilizamos únicamente conductores de cobre certificados de calibres adecuados, canalizaciones seguras y herramientas de medición profesional calibradas.
              </p>
            </div>

            <div className="bg-dark-primary border border-dark-border p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">¿Tienen costo las visitas de diagnóstico?</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Realizamos una inspección física detallada para encontrar la causa raíz del problema. Si decides realizar el servicio de reparación con nosotros, el costo del diagnóstico se descuenta del total del trabajo. Siempre acordamos un precio justo antes de iniciar.
              </p>
            </div>

            <div className="bg-dark-primary border border-dark-border p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">¿Qué formas de pago aceptan?</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Para tu comodidad, aceptamos pagos en efectivo y transferencias bancarias directas una vez que el trabajo ha quedado completamente solucionado y verificado frente a ti.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section before footer */}
      <section className="py-16 bg-gradient-to-r from-accent/15 via-amber-500/10 to-accent/5 border-y border-accent/25 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            ¿Tienes una Falla Eléctrica o una Nueva Instalación?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No pongas en riesgo tu hogar o comercio. Contáctanos ahora mismo por WhatsApp para recibir asesoría honesta y agendar un diagnóstico en Chilpancingo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://wa.me/527472582898" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-2xl hover:bg-whatsapp-light transition-all duration-300 font-bold text-lg shadow-xl shadow-whatsapp/15 hover:shadow-whatsapp/25 glow-whatsapp-hover"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              Chatear por WhatsApp
            </a>
            <a 
              href="tel:+527472582898" 
              className="inline-flex items-center justify-center gap-3 bg-dark-secondary hover:bg-dark-surface text-white px-8 py-4 rounded-2xl border border-dark-border transition-all duration-300 font-bold text-lg"
            >
              <Phone className="h-5 w-5 text-accent animate-pulse" />
              Llamar al +52 7472582898
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-dark-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Contáctanos
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  Solicita presupuesto sin compromiso o cuéntanos el problema de tu instalación. Acudimos de manera rápida.
                </p>
              </div>

              <div className="space-y-6">
                
                <a href="tel:+527472582898" className="flex items-start gap-4 p-4 rounded-2xl bg-dark-primary border border-dark-border/40 hover:border-accent/40 transition-colors group">
                  <div className="bg-accent/15 p-3 rounded-xl border border-accent/25 group-hover:bg-accent transition-colors">
                    <Phone className="h-6 w-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Llamada Telefónica</p>
                    <p className="text-base font-bold text-white group-hover:text-accent transition-colors">+52 7472582898</p>
                    <p className="text-xs text-text-muted mt-0.5">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </div>
                </a>

                <a href="mailto:uluni378@gmail.com" className="flex items-start gap-4 p-4 rounded-2xl bg-dark-primary border border-dark-border/40 hover:border-accent/40 transition-colors group">
                  <div className="bg-accent/15 p-3 rounded-xl border border-accent/25 group-hover:bg-accent transition-colors">
                    <Mail className="h-6 w-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Correo Electrónico</p>
                    <p className="text-base font-bold text-white group-hover:text-accent transition-colors">uluni378@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-dark-primary border border-dark-border/40">
                  <div className="bg-accent/15 p-3 rounded-xl border border-accent/25">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Cobertura y Ubicación</p>
                    <p className="text-base font-bold text-white">Chilpancingo, Guerrero</p>
                    <p className="text-xs text-text-muted mt-0.5">Calle Jesús de Nazareth, Colonia Candelaria, Chilpancingo de los Bravo</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-dark-primary border border-dark-border p-8 md:p-10 rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold text-white">Formulario de Solicitud de Servicio</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-secondary text-text focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-secondary text-text focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                        placeholder="Ej. 7471234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-text mb-2">
                      Tipo de Servicio *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-secondary text-text focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Instalaciones Eléctricas">Instalaciones Eléctricas</option>
                      <option value="Detección/Reparación de Fallas">Detección o Reparación de Fallas</option>
                      <option value="Iluminación LED">Iluminación LED</option>
                      <option value="Mantenimiento de Tableros">Mantenimiento de Tableros</option>
                      <option value="Servicio Urgente/Emergencia">Servicio Urgente / Emergencia</option>
                      <option value="Local Comercial / Oficina">Local Comercial / Oficina</option>
                      <option value="Otro Servicio">Otro Servicio</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-text mb-2">
                      Descripción del problema *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-secondary text-text focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Cuéntanos brevemente qué falla o qué instalación necesitas realizar..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent-light transition-all duration-300 font-bold text-lg shadow-lg shadow-accent/20 hover:shadow-accent/35 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    Enviar por WhatsApp
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <p className="text-[11px] text-text-muted text-center leading-normal">
                    * Al hacer clic se abrirá la aplicación de WhatsApp para enviar el formulario automáticamente a nuestro número de atención.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-primary text-white border-t border-dark-border/40 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent/15 p-2 rounded-lg border border-accent/25">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xl font-bold tracking-tight">ERG Electricidad</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                Servicios eléctricos profesionales e instalaciones seguras bajo la norma NOM-001-SEDE. Atención residencial y comercial honesta en Chilpancingo, Guerrero.
              </p>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h3 className="font-bold text-base text-white">Navegación</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
                <li><a href="#como-trabajamos" className="hover:text-accent transition-colors">¿Cómo trabajamos?</a></li>
                <li><a href="#beneficios" className="hover:text-accent transition-colors">Garantías de confianza</a></li>
                <li><a href="#galeria" className="hover:text-accent transition-colors">Proyectos reales</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h3 className="font-bold text-base text-white">Contacto</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <span>+52 7472582898</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <span className="break-all">uluni378@gmail.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Chilpancingo, Guerrero. Calle Jesús de Nazareth, Colonia Candelaria.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-dark-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} ERG Electricidad Residencial y Comercial. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-dark-secondary p-2.5 rounded-full hover:bg-accent border border-dark-border transition-colors group">
                <Facebook className="h-4 w-4 text-text-muted group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-dark-secondary p-2.5 rounded-full hover:bg-accent border border-dark-border transition-colors group">
                <Instagram className="h-4 w-4 text-text-muted group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/527472582898" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-whatsapp text-white p-4.5 rounded-full shadow-2xl hover:bg-whatsapp-light transition-all transform hover:scale-110 z-50 flex items-center justify-center glow-whatsapp hover:glow-whatsapp-hover border border-whatsapp-light/20"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-whatsapp-light"></span>
        </span>
      </a>
    </div>
  );
}
