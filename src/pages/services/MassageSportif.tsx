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
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
            <img
              src="/IMG_9700.jpg"
              alt="massage sportif"
              className="object-cover w-full h-full rounded-md shadow-lg"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                Qu'est-ce que le massage sportif ?
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Le massage sportif est une technique de massage qui est
                spécialement conçue pour aider les athlètes à améliorer leur
                performance, à récupérer plus rapidement après un entraînement
                ou une compétition, et à prévenir les blessures.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Il peut être appliqué avant, pendant, ou après des activités
                sportives. Ce type de massage cible les muscles les plus
                sollicités durant les exercices physiques, offrant une approche
                personnalisée qui répond aux besoins spécifiques de chaque
                sportif.
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
                Nos massages sportif sont conçues pour toi.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Nos massages sportifs sont conçus pour améliorer la performance,
                la récupération, réduire la fatigue, prévenir les blessures,
                soulager les douleurs musculaires et améliorer ta concentration.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Le massage sportif peut être bénéfique pour tous les types
                d'athlètes, des professionnels aux amateurs actifs, et est
                adapté à une grande variété de disciplines sportives.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
            <img
              src="/IMG_9702.jpg"
              alt="massage sportif"
              className="object-cover w-full h-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
