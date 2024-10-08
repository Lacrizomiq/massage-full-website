import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import React from "react";

export default function RenforcementDetail() {
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
                src="/renforcement1.webp"
                width={500}
                height={500}
                alt="renforcement"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Découvrez les nombreux avantages du renforcement musculaire.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  En plus d'augmenter la force et l'endurance, d'améliorer la
                  posture et de prévenir les blessures, nos séances de
                  renforcement musculaire mettent l'accent sur la pédagogie.
                </p>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Intégrez ces exercices dans votre quotidien vous permettra
                  d’améliorer votre santé, renforcer votre corps et cultiver un
                  bien-être global.
                </p>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  En complément, profitez également de sessions de massage
                  régénérantes incluses dans votre programme.
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
                  Vous serez guidé à travers chaque exercice.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Nous vous enseignerons les techniques appropriées, également
                  des conseils personnalisés afin de vous rendre autonome pour
                  la suite de votre évolution.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/renforcement2.webp"
                width={500}
                height={500}
                alt="renforcement"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
