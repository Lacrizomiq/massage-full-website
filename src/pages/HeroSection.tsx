import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => (
  <div className="w-full py-8 lg:py-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              C'est ici que commence ta transformation physique
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Masseurs professionnels et Coachs sportifs, nous t'accompagnons
              dans tes projets afin que tu puisses libérer le plein potentiel de
              ton corps.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Prends rendez-vous
              <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Découvre nos services <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);
