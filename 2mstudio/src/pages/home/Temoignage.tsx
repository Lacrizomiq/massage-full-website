import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const testimonials = [
  {
    id: 1,
    content:
      "J'ai été accompagné pendant plus de 6 mois sur la prestation de renforcement musculaire. 10kg de perdu sur la balance et une amélioration de ma forme au quotidien qui est visible par tous !",
    author: "Ludovic",
    title: "La meilleure décision de ma vie",
  },
  {
    id: 2,
    content:
      "A la recherche d'un accompagnement au petit oignon, je me suis naturellement tourné vers 2M Studio qui m'aide dans l'atteinte de mes objectifs physique et bien-être. Des professionnels passionnés, très sympathiques et très professionnels.",
    author: "Valentin",
    title: "Un accompagnement exceptionnel",
  },
  {
    id: 3,
    content:
      "Grâce à 2M Studio, j'ai retrouvé la motivation pour prendre soin de ma santé. Leur approche personnalisée a vraiment fait la différence dans mon parcours de remise en forme.",
    author: "Quentin",
    title: "Une transformation incroyable",
  },
];

const TestimonialCard: React.FC<{
  content: string;
  author: string;
  title: string;
}> = ({ content, author, title }) => (
  <Card className="h-full transition-shadow duration-300 bg-white shadow-lg hover:shadow-xl">
    <CardContent className="flex flex-col justify-between h-full p-6">
      <div>
        <h3 className="mb-2 text-xl font-normal">{title}</h3>
        <p className="max-w-xl mb-4 text-lg text-muted-foreground">{content}</p>
      </div>
      <div className="flex items-center mt-4">
        <Avatar className="w-10 h-10 mr-3">
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${author}`}
          />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{author}</span>
      </div>
    </CardContent>
  </Card>
);

export const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100 lg:py-20">
      <div className="container flex flex-col items-center gap-10 px-4 mx-auto">
        <h2 className="max-w-xl text-3xl tracking-tighter text-center md:text-5xl font-regular">
          De nombreux clients nous font confiance
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
