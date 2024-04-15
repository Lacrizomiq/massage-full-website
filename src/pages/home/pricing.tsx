import MassageBienEtre from "./pricing/MassageBienEtre";
import MassageSportif from "./pricing/MassageSportif";
import MobiliteMassage from "./pricing/MobiliteMassage";
import Renforcement from "./pricing/Renforcement";

const PricingCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center py-8 lg:py-12">
      <MassageBienEtre />
      <MassageSportif />
      <MobiliteMassage />
      <Renforcement />
    </div>
  );
};

export default PricingCard;
