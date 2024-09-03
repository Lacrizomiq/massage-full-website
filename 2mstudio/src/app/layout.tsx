import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationMenuHeader } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2M Studio",
  description:
    "2M Studio propose des massages bien-être et sportifs personnalisés à Lagnes dans le Vaucluse (84). Améliorez votre mobilité et relaxez-vous avec nos experts en massage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenuHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
