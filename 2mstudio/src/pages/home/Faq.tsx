import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function Faq() {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-col gap-2">
              <h4 className="max-w-xl text-3xl tracking-tighter text-center md:text-5xl font-regular">
                Foire à questions
              </h4>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-center text-muted-foreground">
                Tu te poses des questions ? Voici quelques réponses.
              </p>
            </div>

            <div className="w-full max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={"index-"}>
                  <AccordionTrigger>
                    Quelle est la différence entre massage bien-être et massage
                    sportif ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Le monde des massages, c'est comme entrer dans une
                      pâtisserie remplie de délices pour le corps et l'esprit !
                      <br />
                      D'un côté, tu as le massage sportif, un peu comme le coach
                      personnel des massages. Il est là pour booster les
                      performances des sportifs, leur permettre de récupérer
                      plus vite après un entraînement ou une compétition, et les
                      aider à éviter ces petites blessures sournoises. Imagine
                      tes muscles recevant une préparation et une réparation sur
                      mesure pour qu'ils soient toujours prêts à donner le
                      meilleur d'eux-mêmes.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      De l'autre côté, le massage bien-être, c'est comme ton
                      meilleur ami qui sait exactement quoi dire pour te calmer
                      après une longue journée. Il ne te juge pas, il est là
                      pour t'offrir un moment de détente pure, loin du stress et
                      des tensions du quotidien. Ce type de massage te prend par
                      la main et t'emmène dans un voyage où le seul but est de
                      te sentir bien dans ta peau, détendu et serein. C'est un
                      peu comme une bulle de bonheur dans un monde souvent trop
                      agité.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={"index-"}>
                  <AccordionTrigger>
                    Lequel est le mieux adapté pour moi ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Si tu es un athlète ou une personne très active, le
                      massage sportif peut être ton allié pour garder tes
                      muscles en forme, améliorer ta performance et éviter les
                      blessures. C'est un entraîneur pour ton corps, mais en
                      plus doux.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Par contre, si ce que tu cherches, c'est simplement te
                      relaxer, te débarrasser du stress ou améliorer ton
                      sommeil, le massage bien-être est là pour toi. Il te prend
                      sous son aile sans aucune prétention de performance, juste
                      pour le plaisir de te voir sourire et te sentir bien.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Même si les deux types de massage peuvent sembler offrir
                      des bienfaits similaires, comme soulager la douleur ou
                      améliorer la circulation, leur approche et leurs objectifs
                      sont assez différents. <br />
                      Le massage sportif, c'est ton partenaire pour une vie
                      active et performante, tandis que le massage bien-être,
                      c'est ton refuge pour un moment de paix et de relaxation.
                      Le choix est personnel et dépend entièrement de ce dont
                      ton corps et ton esprit ont besoin à ce moment-là. <br />
                      C'est un peu comme choisir entre une séance de gym et une
                      soirée cosy chez toi – les deux ont leur place, selon ce
                      qui te fait du bien.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={"index-"}>
                  <AccordionTrigger>
                    Est-il possible de réaliser une séance de massage bien-être
                    en couple ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Nos massages bien-être sont conçus pour être réalisés en
                      couple, avec nos deux masseurs. N'hesitez pas à nous
                      contacter pour plus de détails.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={"index-"}>
                  <AccordionTrigger>
                    Où se déroule le renforcement musculaire ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Dans le cadre du service de renforcement musculaire, les
                      exercices de renforcement se feront dans une salle de
                      sport localisé à Isle sur la Sorgue. N'hésitez pas à nous
                      contacter pour plus de détails.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={"index-"}>
                  <AccordionTrigger>
                    A qui s'adresse le service de maintien de l'autonomie et de
                    la mobilité ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Ce service est principalement conçu pour les personnes
                      seniors, qui cherchent à maintenir leur autonomie et leur
                      mobilité en travaillant dans une ambiance conviviale,
                      motivante et sécurisée.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Nous proposons 2 séances par semaine, avec une durée de 1
                      heure et à horaires fixes.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Si vous n'êtes pas seniors mais que vous êtes à la
                      recherche de ce service, n'hésitez pas à nous contacter
                      afin que nous vous orientions vers un service adapté à vos
                      besoins.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={"index-"}>
                  <AccordionTrigger>
                    Comment se déroule les séances de cardio training ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Nous proposons 2 séances par semaine, avec une durée de 1
                      heure et à horaires fixes.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Nous vous recevrons dans nos locaux, avec tout
                      l'equipement nécessaire pour réaliser votre séance.
                    </p>
                    <br />
                    <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                      Un coach sportif d'experience vous accompagnera dans votre
                      séance, pour vous aider à atteindre vos objectifs et vous
                      aider à vous dépasser.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
