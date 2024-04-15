import { HeroSection } from "./home/HeroSection";
import { Separator } from "@/components/ui/separator";
import { Description } from "./home/Description";

export const Home = () => (
  <div>
    <HeroSection />
    <Separator />
    <Description />
    <Separator />
  </div>
);
