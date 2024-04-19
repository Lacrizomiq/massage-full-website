import { Separator } from "@/components/ui/separator";

export const MobiliteDetails = () => (
  <>
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video"></div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                Préparez-vous à une expérience de massage optimale en intégrant
                à nos séances la mobilité.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                En travaillant des zones clés, vous vous offrez une préparation
                idéale pour un massage plus efficace et relaxant.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Une meilleure mobilité favorise une posture optimale, détend les
                muscles et réduit les tensions, offrant ainsi une toile de fond
                idéale pour profiter pleinement des bienfaits du massage.
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
                Nos sessions personnalisées sont conçues pour vous.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Nos sessions personnalisées sont conçues pour améliorer la
                flexibilité, favoriser la circulation sanguine, prévenir les
                blessures et développer votre conscience corporel ce qui permet
                à votre corps de recevoir les bienfaits du massage de manière
                plus profonde et durable.
              </p>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Offrez-vous une expérience de massage inoubliable en intégrant
                la mobilité dans cette prestation.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video"></div>
        </div>
      </div>
    </div>
  </>
);
