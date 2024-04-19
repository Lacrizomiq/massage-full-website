import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => (
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
                  Le monde des massages, c'est comme entrer dans une pâtisserie
                  remplie de délices pour le corps et l'esprit !
                  <br />
                  D'un côté, tu as le massage sportif, un peu comme le coach
                  personnel des massages. Il est là pour booster les
                  performances des sportifs, leur permettre de récupérer plus
                  vite après un entraînement ou une compétition, et les aider à
                  éviter ces petites blessures sournoises. Imagine tes muscles
                  recevant une préparation et une réparation sur mesure pour
                  qu'ils soient toujours prêts à donner le meilleur d'eux-mêmes.
                </p>
                <br />
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                  De l'autre côté, le massage bien-être, c'est comme ton
                  meilleur ami qui sait exactement quoi dire pour te calmer
                  après une longue journée. Il ne te juge pas, il est là pour
                  t'offrir un moment de détente pure, loin du stress et des
                  tensions du quotidien. Ce type de massage te prend par la main
                  et t'emmène dans un voyage où le seul but est de te sentir
                  bien dans ta peau, détendu et serein. C'est un peu comme une
                  bulle de bonheur dans un monde souvent trop agité.
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
                  Si tu es un athlète ou une personne très active, le massage
                  sportif peut être ton allié pour garder tes muscles en forme,
                  améliorer ta performance et éviter les blessures. C'est un
                  entraîneur pour ton corps, mais en plus doux.
                </p>
                <br />
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                  Par contre, si ce que tu cherches, c'est simplement te
                  relaxer, te débarrasser du stress ou améliorer ton sommeil, le
                  massage bien-être est là pour toi. Il te prend sous son aile
                  sans aucune prétention de performance, juste pour le plaisir
                  de te voir sourire et te sentir bien.
                </p>
                <br />
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                  Même si les deux types de massage peuvent sembler offrir des
                  bienfaits similaires, comme soulager la douleur ou améliorer
                  la circulation, leur approche et leurs objectifs sont assez
                  différents. <br />
                  Le massage sportif, c'est ton partenaire pour une vie active
                  et performante, tandis que le massage bien-être, c'est ton
                  refuge pour un moment de paix et de relaxation. Le choix est
                  personnel et dépend entièrement de ce dont ton corps et ton
                  esprit ont besoin à ce moment-là. <br />
                  C'est un peu comme choisir entre une séance de gym et une
                  soirée cosy chez toi – les deux ont leur place, selon ce qui
                  te fait du bien.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
