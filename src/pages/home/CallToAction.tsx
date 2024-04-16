import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => (
  <div className="w-full py-8 lg:py-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-8 p-4 text-center rounded-md bg-muted lg:p-14">
        <div className="flex flex-col gap-2">
          <h3 className="max-w-xl text-3xl tracking-tighter md:text-5xl font-regular">
            Prends ton rendez-vous dès aujourd'hui !
          </h3>
          <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground">
            Envie de changer ton physique pour le meilleur ? Que ce soit pour
            passer un moment détente ou être en meilleur forme, nous sommes là
            pour toi.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Prendre rendez-vous <PhoneCall className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
