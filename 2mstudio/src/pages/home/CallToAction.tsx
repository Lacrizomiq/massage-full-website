import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { FaRegAddressBook } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className="w-full py-4 lg:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 p-4 text-center bg-white rounded-md lg:p-14">
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
          <div className="flex flex-col gap-4 md:flex-row">
            <Button className="gap-4" variant="outline">
              Prendre rendez-vous <PhoneCall className="w-4 h-4" />
            </Button>
            <a
              href="https://www.planity.com/studio-2-m-84800-lagnes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-auto">
                Réserver en ligne <FaRegAddressBook className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
