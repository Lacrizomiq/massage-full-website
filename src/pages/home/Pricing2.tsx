import { Check, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TbMassage } from "react-icons/tb";
import { TbYoga } from "react-icons/tb";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Pricing2 = () => (
  <div className="w-full py-8 lg:py-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="max-w-xl text-3xl tracking-tighter text-center md:text-5xl font-regular">
            Les prestations que nous te proposons
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 pt-10 text-left lg:grid-cols-2">
          <Card className="flex flex-col w-full rounded-md shadow-2xl">
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row items-center gap-4 font-normal">
                    <TbMassage /> Massage Bien-être
                  </span>
                </CardTitle>
                <CardDescription>
                  Massage bien-être pour te détendre et te relaxer.
                  <br />
                  Le massage dure 1 heure.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col justify-start gap-8">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">60 €</span>
                    <span className="text-sm text-muted-foreground"></span>
                  </p>
                  <div className="flex flex-col justify-start gap-4">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Echange préalable au massage</p>
                        <p className="text-sm text-muted-foreground">
                          Afin de mieux te connaitre.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Massage bien-être</p>
                        <p className="text-sm text-muted-foreground">
                          Détente et relaxation guarantis.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Utilisation d'huile relaxante</p>
                        <p className="text-sm text-muted-foreground">
                          Pour t'offrir une expérience sans pareil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="p-4">
              <Button className="w-full gap-4 bg-caramel">
                <Link
                  to="/massage-bien-etre"
                  className="flex items-center justify-center w-full"
                >
                  En savoir plus
                  <MoveRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col w-full rounded-md shadow-2xl">
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row items-center gap-4 font-normal">
                    <TbMassage /> Massage sportif
                  </span>
                </CardTitle>
                <CardDescription>
                  Massage sportif pour améliorer ta condition physique. <br />
                  Le massage dure 1 heure.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col justify-start gap-8">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">60 €</span>
                    <span className="text-sm text-muted-foreground"> </span>
                  </p>
                  <div className="flex flex-col justify-start gap-4">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Echange préalable au massage</p>
                        <p className="text-sm text-muted-foreground">
                          Afin de mieux te connaitre.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Massage sportif</p>
                        <p className="text-sm text-muted-foreground">
                          Tes muscles te remercieront.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Utilisation d'huile relaxante</p>
                        <p className="text-sm text-muted-foreground">
                          Pour t'offrir une expérience sans pareil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="p-4">
              <Button className="w-full gap-4 bg-caramel">
                <Link
                  to="/massage-sportif"
                  className="flex items-center justify-center w-full"
                >
                  En savoir plus
                  <MoveRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col w-full rounded-md shadow-2xl">
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row items-center gap-4 font-normal">
                    <TbYoga /> Mobilité du corps et massage
                  </span>
                </CardTitle>
                <CardDescription>
                  Travail autour de l'amélioration de ta mobilité suivi d'un
                  massage. La prestation dure 1h30.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col justify-start gap-8">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">80 €</span>
                    <span className="text-sm text-muted-foreground"> </span>
                  </p>
                  <div className="flex flex-col justify-start gap-4">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Repérage des tensions musculaires</p>
                        <p className="text-sm text-muted-foreground">
                          On va identifier tes zones de tensions.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Préparation du corps au massage</p>
                        <p className="text-sm text-muted-foreground">
                          Afin d'augmenter l'efficacité du massage.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Sessions personnalisées</p>
                        <p className="text-sm text-muted-foreground">
                          Massage adapté à ton corps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="p-4">
              <Button className="w-full gap-4 bg-caramel">
                <Link
                  to="/mobilite-massage"
                  className="flex items-center justify-center w-full"
                >
                  En savoir plus
                  <MoveRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col w-full rounded-md shadow-2xl">
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row items-center gap-4 font-normal">
                    <GiWeightLiftingUp /> Renforcement musculaire et massage
                  </span>
                </CardTitle>
                <CardDescription>
                  Coaching personnalisé à base de renforcement musculaire,
                  d'exercices de mobilité et de massages. La prestation s'étale
                  sur 1 mois.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col justify-start gap-8">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">400 €</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / mois
                    </span>
                  </p>
                  <div className="flex flex-col justify-start gap-4">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Séances de renforcement musculaire</p>
                        <p className="text-sm text-muted-foreground">
                          En salle de sport afin de renforcer tes muscles.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Sessions de massage régénérantes incluses</p>
                        <p className="text-sm text-muted-foreground">
                          2 massages sportifs dans le mois afin d'accélérer ta
                          récupération.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Amélioration de ta posture</p>
                        <p className="text-sm text-muted-foreground">
                          A travers des exercices de mobilité
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="p-4">
              <Button className="w-full gap-4 bg-caramel">
                <Link
                  to="/coaching-massage"
                  className="flex items-center justify-center w-full"
                >
                  En savoir plus
                  <MoveRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
