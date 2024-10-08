import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Description() {
  return (
    <>
      <div className="w-full py-8 lg:py-12">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/massage-duo.webp"
                alt="Max et Corentin"
                className="object-cover object-top w-full h-full shadow-xl object rounded-xl"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Etablissons ensemble ton bien-être de demain
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Nous te recevrons dans nos locaux situés en plein coeur du
                  village de Lagnes, havre de paix provencal, en plein coeur du
                  Vaucluse, proche de Isle sur la Sorgue, Cavaillon et Gordes.
                </p>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Nos massages et nos services sont conçues en fonction de
                  chacun afin de s'adapter aux mieux à tes besoins. Nous te
                  transmettrons les clés pour que tu puisses être en meilleure
                  forme durablement à travers notre pédagogie axé sur le
                  partage.
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
              <div></div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                  Des professionnels sérieux et passionés
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                  Cumulant plusieurs décennies d'expérience dans différents
                  domaines du sport et du bien-être, nous avons toutes les armes
                  pour t'accompagner dans ta quête de bien-être.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
              <Image
                src="/coco-max-description.webp"
                alt="mobilite"
                className="object-cover w-full h-full shadow-xl rounded-xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
