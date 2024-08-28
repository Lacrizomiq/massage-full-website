import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export const AboutUs = () => (
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
              src="/coco-presentation.jpg"
              alt="Corentin"
              className="object-cover w-full h-full shadow-xl rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                Corentin
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Corentin est un coach sportif polyvalent avec une forte
                inclinaison pour la spiritualité et le développement personnel.
                Pratiquant de parkour passionné, il dirige également une école
                de combat artistique de sabre laser.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Enrichi par une expérience unique de trois mois avec des moines
                bouddhistes en Chine, Corentin intègre des éléments de
                méditation et de pleine conscience dans ses séances de massage,
                de mobilité ainsi que de renforcement. Il guide ses clients vers
                un équilibre harmonieux entre corps et esprit, favorisant la
                relaxation, la flexibilité, et le bien-être global.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Ses massages, ses techniques de mobilité et de renforcement
                contribuent à réduire le stress, à améliorer la qualité de vie
                de ses clients ainsi que leur performance sportive.
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
                Max
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Max est un coach sportif expérimenté avec plusieurs années de
                pratique dans le domaine du coaching et du bodybuilding. Sa
                profonde connaissance de la biomécanique et de l'anatomie
                musculaire lui permet de proposer des massages ciblés, des
                séances de mobilité efficaces ainsi que des séances de
                renforcement musculaire performantes.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Passionné par le développement physique et la performance, Max
                accompagne ses clients dans l'atteinte de leurs objectifs en
                veillant à la prévention des blessures et à l'optimisation des
                mouvements. Ses compétences permettent de maximiser la
                récupération musculaire et d'améliorer la mobilité, offrant
                ainsi un bien-être global à ses clients.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground"></p>
            </div>
          </div>
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
            <img
              src="/max-presentation.png"
              alt="Max"
              className="object-cover object-top w-full h-full shadow-xl object rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    <Separator />
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video">
            <img
              src="/massage-duo.jpg"
              alt="Max et Corentin"
              className="object-cover object-top w-full h-full shadow-xl object rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                Une complémentarité unique à ton service.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Cette combinaison unique de savoir-faire technique et de
                bien-être mental crée un environnement équilibré et complet, que
                ce soit pour un moment de relaxation ou pour améliorer tes
                performances.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Tu bénéficies ainsi d'une prise en charge globale et
                personnalisée, favorisant une meilleure performance, une
                récupération optimale, et un bien-être général.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
