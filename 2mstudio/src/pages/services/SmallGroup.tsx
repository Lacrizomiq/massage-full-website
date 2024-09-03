import { Separator } from "@/components/ui/separator";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function SmallGroup() {
  return (
    <>
      <Link
        href="/"
        className="flex items-center pt-8 pl-8 tracking-tighter text-left underline lg:max-w-xl font-regular"
      >
        <GoArrowLeft /> Retour à la page d'accueil
      </Link>
      <div className="w-full py-4 lg:py-8">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/cardio1.webp"
                width={500}
                height={500}
                alt="cardio training small group"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Qu'est-ce que le cardio training ?
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Boostez votre forme physique avec nos sessions de cardio
                  training en petit groupe de 5 personnes, deux fois par
                  semaine.
                </p>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Chaque session de 1 heure est conçue pour maximiser votre
                  endurance, brûler des calories et renforcer votre cœur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="w-full py-8 lg:py-12">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex flex-col flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Des coachs sportifs d'experience pour vous accompagner.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Entraînez-vous dans une ambiance conviviale et motivante, où
                  chaque participant bénéficie d'un coach disponible pour vous
                  aider à atteindre vos objectifs.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/cardio2.webp"
                width={500}
                height={500}
                alt="cardio training small group"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
