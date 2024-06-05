import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export const MassageSportif = () => (
  <>
    <Link
      to="/"
      className="flex items-center pt-8 pl-8 tracking-tighter text-left underline lg:max-w-xl font-regular"
    >
      <GoArrowLeft /> Retour à la page d'accueil
    </Link>
    <div className="w-full py-4 lg:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video"></div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                Qu'est-ce que le massage bien-être ?
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Le massage bien-être, aussi connu sous le nom de massage de
                relaxation ou massage holistique, est une pratique visant à
                améliorer la santé générale et le bien-être psychologique d'une
                personne à travers diverses techniques de massage.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Contrairement au massage sportif, qui est orienté vers
                l'amélioration des performances et la récupération physique des
                sportifs, le massage bien-être se concentre sur la détente
                globale, la réduction du stress et l'amélioration de la qualité
                de vie.
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
                Nos massages bien-être sont conçues pour toi.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Il s'adresse à toute personne cherchant à réduire son niveau de
                stress, à améliorer son sommeil, ou simplement à se faire
                plaisir avec un moment de détente profonde.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Le massage bien-être peut également être bénéfique afin de
                renforcer son système immunitaires, de soulager les douleurs
                musculaires et articulaires, ou encore de favoriser la
                circulation sanguine.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video"></div>
        </div>
      </div>
    </div>
  </>
);
