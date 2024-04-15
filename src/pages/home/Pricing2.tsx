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

export const Pricing2 = () => (
  <div className="w-full py-8 lg:py-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="max-w-xl text-3xl tracking-tighter text-center md:text-5xl font-regular">
            Prices that make sense!
          </h2>
          <p className="max-w-xl text-lg leading-relaxed tracking-tight text-center text-muted-foreground">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 pt-10 text-left lg:grid-cols-2">
          <Card className="w-full rounded-md shadow-2xl">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  <TbMassage /> Massage Bien-être
                </span>
              </CardTitle>
              <CardDescription>
                Massage bien-être pour vous détendre et vous relaxer.
                <br />
                Le massage dure 1 heure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">60 €</span>
                  <span className="text-sm text-muted-foreground"></span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  En savoir plus <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md shadow-2xl">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  Growth
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  En savoir plus <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md shadow-2xl">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  Growth
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  En savoir plus <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md shadow-2xl">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  Growth
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  En savoir plus <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
