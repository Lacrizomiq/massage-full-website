"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl tracking-tighter text-left md:text-5xl lg:max-w-xl font-regular">
            De nombreux clients nous font confiance
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="flex flex-col justify-between h-full p-6 rounded-md bg-muted lg:col-span-2 aspect-video">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          Best decision
                        </h3>
                        <p className="max-w-xs text-base text-muted-foreground">
                          Our goal was to streamline SMB trade, making it easier
                          and faster than ever and we did it together.
                        </p>
                      </div>
                      <p className="flex flex-row items-center gap-2 text-sm">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="w-6 h-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>John Johnsen</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
