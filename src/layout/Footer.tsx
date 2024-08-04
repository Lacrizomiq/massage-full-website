import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

// TikTok icon n'est pas disponible dans lucide-react, donc nous allons créer un composant personnalisé
const TikTokIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 19.25 5a4.25 4.25 0 0 1 4.25 4.25v2.92c-1.38.26-2.9.14-4.25-.56v3.89a7.5 7.5 0 1 1-7-7.47V12a4.5 4.5 0 1 0 3.5 4.4v-9.1a7.5 7.5 0 0 0 4.25 1.97"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer = () => {
  const navigationItems = [
    {
      title: "Accueil",
      href: "/",
      description: "",
    },
    {
      title: "Services",
      description: "Nos différentes prestations",
      items: [
        {
          title: "Massage bien-être",
          href: "/massage-bien-etre",
        },
        {
          title: "Massage sportif",
          href: "/massage-sportif",
        },
        {
          title: "Mobilité",
          href: "mobilite-massage",
        },
        {
          title: "Renforcement",
          href: "coaching-massage",
        },
      ],
    },
    {
      title: "Le cabinet",
      description: "Qui nous sommes",
      items: [
        {
          title: "A propos de nous",
          href: "/about-us",
        },
        {
          title: "Nous contacter",
          href: "/contact",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/votre_compte",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@votre_compte",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/c/votre_chaine",
    },
  ];

  return (
    <footer className="w-full py-8 bg-caramel lg:py-12 text-background">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl tracking-tighter font-regular md:text-5xl">
                2M Studio
              </h2>
              <p className="text-lg text-background/75">Massage et mobilité</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-background/75">
                <p>Adresse,</p>
                <p>Lagnes,</p>
                <p>84800</p>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-background hover:text-background/75"
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-1 text-base"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link to={item.href} className="text-xl hover:underline">
                      {item.title}
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items && (
                    <ul className="space-y-1">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            className="text-background/75 hover:text-background hover:underline"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
