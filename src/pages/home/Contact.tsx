// pages/Contact.tsx

import ContactForm from "./ContactForm";
import { Separator } from "@/components/ui/separator";

export const ContactPage = () => {
  return (
    <section className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl">
        Nous Trouver
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Section Adresse et Carte */}
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/maps.png"
              alt="Localisation de notre entreprise"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Notre Adresse</h2>
            <p className="mt-2 text-lg leading-relaxed">
              70 rue de la République
              <br />
              84800, Lagnes
              <br />
              France
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              rel="noopener noreferrer"
            >
              Obtenir des directions
            </a>
          </div>
        </div>

        {/* Section Formulaire de Contact */}
        <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl">
          Nous Contacter
        </h1>
        <div>
          <h2 className="text-2xl font-semibold">Envoyez-nous un message</h2>
          <p className="mt-2 mb-6 text-lg text-muted-foreground">
            Vous avez des questions ou souhaitez plus d'informations ?
            Remplissez le formulaire ci-dessous.
          </p>
          <div className="p-6 rounded-lg shadow-lg bg-gray-50">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
