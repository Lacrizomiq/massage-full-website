// pages/Contact.tsx

import { FaMobile } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-4 px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl">
        Nous Trouver
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Section Adresse et Carte */}
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.1941206419106!2d5.1146085!3d43.8932461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca099d7e6fcc03%3A0xebe27251b047bce4!2s2M%20Studio!5e0!3m2!1sfr!2sfr!4v1724964846719!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
              href="https://maps.app.goo.gl/yK4VaQq5dQHNFEma9"
              target="_blank"
              className="inline-block px-4 py-2 mt-4 text-white bg-black rounded-lg hover:bg-blue-700"
              rel="noopener noreferrer"
            >
              Liens vers Google Maps
            </a>
          </div>
        </div>

        {/* Section Numéros de Téléphone */}
        <div>
          <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
            Nous Contacter
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMobile className="text-4xl text-black" />
              <div>
                <h3 className="text-xl font-semibold">Corentin</h3>
                <a
                  href="tel:+33767455731"
                  className="text-lg text-blue-600 hover:underline"
                >
                  07 67 45 57 31
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMobile className="text-4xl text-black" />
              <div>
                <h3 className="text-xl font-semibold">Max</h3>
                <a
                  href="tel:+33674196701"
                  className="text-lg text-blue-600 hover:underline"
                >
                  06 74 19 67 01
                </a>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            N'hésitez pas à nous appeler pour toute question ou pour prendre
            rendez-vous. Nous sommes à votre disposition pour vous aider.
          </p>
        </div>
      </div>
    </section>
  );
};
