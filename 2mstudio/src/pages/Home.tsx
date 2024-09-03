import { HeroSection } from "./home/HeroSection";
import { Separator } from "@/components/ui/separator";
import { Description } from "./home/Description";
import { Pricing2 } from "./home/Pricing2";
import { Testimonials } from "./home/Temoignage";
import { CallToAction } from "./home/CallToAction";
import { Faq } from "./home/Faq";

export const Home = () => (
  <div>
    <HeroSection />
    <Separator />
    <Description />
    <Separator />
    <Pricing2 />
    <Separator />
    <Testimonials />
    <Separator />
    <Faq />
    <Separator />
    <CallToAction />
  </div>
);
