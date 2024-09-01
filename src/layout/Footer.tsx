import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

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
        {
          title: "Cardio training",
          href: "small-group",
        },
        {
          title: "Autonomie et mobilité",
          href: "autonomie-mobilite",
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
      url: "https://www.instagram.com/2m.studio84",
    },
  ];

  return (
    <footer className="w-full py-8 bg-[#b0c985] lg:py-12 text-background">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <img
                src="/logo-full.png"
                alt="logo"
                className="w-[300px] h-[126px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-background/75">
                <p>70 rue de la République</p>
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
