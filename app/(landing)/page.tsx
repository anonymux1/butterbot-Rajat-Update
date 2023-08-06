import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { FeaturesContent } from "@/components/landing-content";
import { PricingTable } from "@/components/pricing-modal";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <FeaturesContent />
      <PricingTable />
    </div>
   );
}
 
export default LandingPage;
