import HeroSection from "@/pages/home/HeroSection";
import { Separator } from "@/components/ui/separator";
import Description from "@/pages/home/Description";
import Pricing2 from "@/pages/home/Pricing2";
import Testimonials from "@/pages/home/Temoignage";
import CallToAction from "@/pages/home/CallToAction";
import Faq from "@/pages/home/Faq";

export default function Home() {
  return (
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
}
