import { Link } from "react-router-dom";

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
          href: "/reports",
        },
        {
          title: "Massage sportif",
          href: "/statistics",
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
          href: "/about",
        },
        {
          title: "Nous contacter",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-8 bg-blue-400 lg:py-12 text-background">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="max-w-xl text-3xl tracking-tighter text-left md:text-5xl font-regular">
                Cabinet de massage
              </h2>
              <p className="max-w-lg text-lg leading-relaxed tracking-tight text-left text-background/75">
                C'est ici que tout commence.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col max-w-lg text-sm leading-relaxed tracking-tight text-left text-background/75">
                <p>Adresse,</p>
                <p>Isle sur la Sorgue,</p>
                <p>84800</p>
              </div>
            </div>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-1 text-base"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="flex items-center justify-between"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="flex items-center justify-between"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
