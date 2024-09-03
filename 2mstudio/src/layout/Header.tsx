import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components = [
  {
    title: "Massage bien-être",
    to: "/massage-bien-etre",
    description: "Massage bien-être pour te détendre",
  },
  {
    title: "Massage sportif",
    to: "/massage-sportif",
    description: "Massage sportif pour améliorer ta condition physique",
  },
  {
    title: "Travaux de mobilité",
    to: "/mobilite-massage",
    description: "Travail autour de l'amélioration de ta mobilité",
  },
  {
    title: "Renforcement musculaire",
    to: "/coaching-massage",
    description: "Coaching personnalisé",
  },
  {
    title: "Cardio training",
    to: "small-group",
    description: "Cardio training en petit groupe",
  },
  {
    title: "Autonomie et mobilité",
    to: "autonomie-mobilite",
    description: "Maintien de l'autonomie et mobilité",
  },
];

export function NavigationMenuHeader() {
  return (
    <header className="flex flex-col items-center justify-between px-6 space-y-4 md:justify-center md:items-center md:px-24 md:flex-col md:space-y-4 lg:flex-row lg:space-y-0">
      <div className="py-4">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={110} height={120} />
        </Link>
      </div>
      <nav className="w-full pl-12 md:w-auto md:justify-center md:items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Qui sommes-nous ?</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                        href="/about-us"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Corentin et Max
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Une équipe de deux masseurs et coachs sportifs
                          passionnés par leur métier.
                        </p>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Cliquer ici pour en savoir plus !
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] md:w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.to}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Nous contacter
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
