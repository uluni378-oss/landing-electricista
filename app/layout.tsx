import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electricista en Chilpancingo | Instalaciones y Reparaciones ERG",
  description: "Servicio de electricista profesional en Chilpancingo, Guerrero. Instalaciones residenciales y comerciales, diagnóstico de fallas, cortocircuitos y mantenimiento seguro. Atención rápida, limpia y 100% transparente. ¡Cotiza por WhatsApp!",
  keywords: [
    "electricista en Chilpancingo",
    "electricista Chilpancingo",
    "electricista residencial Chilpancingo",
    "electricista comercial Chilpancingo",
    "instalaciones eléctricas Chilpancingo",
    "reparaciones eléctricas",
    "electricista urgente",
    "mantenimiento eléctrico Chilpancingo",
    "diagnóstico de fallas eléctricas"
  ],
  alternates: {
    canonical: "https://pagina-electricista.vercel.app", // standard placeholder, Vercel ready
  },
  openGraph: {
    title: "Electricista en Chilpancingo | Instalaciones y Reparaciones ERG",
    description: "Servicio de electricista profesional en Chilpancingo. Atención rápida, segura y transparente. Instalaciones y reparaciones residenciales y comerciales.",
    url: "https://pagina-electricista.vercel.app",
    siteName: "ERG Electricidad",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased bg-dark-primary text-text">
        {children}
      </body>
    </html>
  );
}
