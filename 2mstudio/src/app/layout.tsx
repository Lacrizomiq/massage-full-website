import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationMenuHeader } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "2M Studio - Massages Bien-être et Sportif dans le Vaucluse, proche de Isle sur la Sorgue",
  description:
    "2M Studio propose des massages bien-être et sportifs personnalisés à Lagnes dans le Vaucluse (84). Améliorez votre mobilité et relaxez-vous avec nos experts en massage.",
  keywords:
    "massage, bien-être, sportif, Lagnes, Isle sur la Sorgue, Cavaillon, Gordes, Vaucluse, mobilité, relaxation, récupération, séniors, coaching, musculation, coaching personnalisés",
  openGraph: {
    title:
      "2M Studio - Massages Bien-être et Sportif dans le Vaucluse, proche de Isle sur la Sorgue",
    description:
      "Découvrez nos massages personnalisés pour votre bien-être et performance sportive.",
    url: "https://www.2mstudio84.fr",
    siteName: "2M Studio",
    images: [
      {
        url: "http://www.2mstudio84.fr/logo.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.2mstudio84.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/logo-blanc.png" />
      </head>
      <body className={inter.className}>
        <NavigationMenuHeader />
        {children}
        <Footer />
        <Script id="schema-org" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "2M Studio",
              "image": "http://www.2mstudio84.fr/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "70 rue de la République",
                "addressLocality": "Lagnes",
                "postalCode": "84800",
                "addressCountry": "FR"
              },
              "telephone": "+33674196701",
              "url": "http://www.2mstudio84.fr",
              "priceRange": "€€",
              "openingHours": "Mo-Fr 09:00-19:00",
              "sameAs": [
                "https://www.instagram.com/2m.studio84"
              ],
              "description": "2M Studio propose des massages bien-être et sportifs personnalisés à Lagnes dans le Vaucluse (84). Améliorez votre mobilité et relaxez-vous avec nos experts en massage.",
              "services": [
                "Massage bien-être",
                "Massage sportif",
                "Renforcement musculaire",
                "Amélioration de la mobilité",
                "Coaching personnalisé",
                "Cardio training",
                "Autonomie et mobilité"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
