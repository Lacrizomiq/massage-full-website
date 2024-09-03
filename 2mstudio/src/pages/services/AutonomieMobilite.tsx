import { Separator } from "@/components/ui/separator";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function AutonomieMobilite() {
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
                src="/mobilite2.webp"
                width={500}
                height={500}
                alt="mobilite autonomie"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Qu'est-ce que le maintien de l'autonomie et de la mobilité ?
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Préservez votre mobilité et votre autonomie avec nos séances
                  spécialisées, dédiées aux seniors et à toutes personnes en
                  quête de bien-être.
                </p>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  À travers des exercices de mobilité doux et adaptés, ces
                  sessions en petit groupe de jusqu'à 5 personnes, d'une durée
                  d'une heure, sont conçues pour améliorer l'équilibre, la
                  flexibilité et la force, afin de vous permettre de rester
                  actif et indépendant au quotidien
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
                  Un moment conviviale et de partage
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Nous vous proposons un moment de partage autour d'une boisson
                  chaude, des papotages ainsi que les activitès du jour afin de
                  vous offrir un moment de relaxation et de bonheur.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/partage-senior.webp"
                width={500}
                height={500}
                alt="partage senior"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="w-full py-4 lg:py-8">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/senior-mobilite.webp"
                width={500}
                height={500}
                alt="mobilite autonomie senior"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Des coachs sportifs d'experience pour vous accompagner.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Travaillez votre mobilité dans une ambiance conviviale et
                  motivante, où chaque participant bénéficie d'un coach
                  disponible pour vous aider à atteindre vos objectifs dans un
                  environnement sécurisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
