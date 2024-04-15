import { HeroSection } from "./home/HeroSection";
import { Separator } from "@/components/ui/separator";
import { Description } from "./home/Description";
import PricingCard from "./home/pricing";
import { Pricing2 } from "./home/Pricing2";
import { Testimonials } from "./home/Temoignage";

export const Home = () => (
  <div>
    <HeroSection />
    <Separator />
    <Description />
    <Separator />
    <PricingCard />
    <Separator />
    <Pricing2 />
    <Separator />
    <Testimonials />
  </div>
);