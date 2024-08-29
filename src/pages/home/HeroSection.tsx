import PhoneCallButton from "@/utils/PhoneCallButton";

export const HeroSection = () => (
  <div className="w-full py-8 lg:py-12">
    <div className="container mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="max-w-lg text-5xl tracking-tighter text-left md:text-7xl font-regular">
              C'est ici que tout commence. <br /> Tu es entre de bonnes mains.
            </h1>
            <p className="max-w-md text-xl leading-relaxed tracking-tight text-left text-muted-foreground">
              Masseurs professionnels et Coachs sportifs dans le Vaucluse, nous
              t'accompagnons dans ton projet bien-être afin que tu puisses
              libérer le plein potentiel de ton corps.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <PhoneCallButton />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-md bg-muted aspect-square">
            <img
              src="/max-hero.png"
              alt="photo presentation max"
              className="object-cover w-full h-full shadow-xl rounded-xl"
            />
          </div>
          <div className="row-span-2 rounded-md bg-muted">
            <img
              src="/max-coco-hero.png"
              alt="photo presentation coco et max"
              className="object-cover w-full h-full shadow-xl rounded-xl"
            />
          </div>
          <div className="rounded-md bg-muted aspect-square">
            <img
              src="/coco-hero.png"
              alt="photo presentation coco"
              className="object-cover w-full h-full shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
