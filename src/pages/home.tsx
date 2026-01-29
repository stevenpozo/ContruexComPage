import '@/i18n';
import Navbar from '@/components/Shared/Navbar/Navbar';
import HeroSection from '@/components/Home/HeroSection/HeroSection';
import StatsSection from '@/components/Home/StatsSection/StatsSection';
import SectionHeading from '@/components/Home/SectionHeading/SectionHeading';
import FeaturesGrid from '@/components/Home/FeaturesGrid/FeaturesGrid';
import GlobalFeaturesGrid from '@/components/Home/GlobalSeccion/GlobalFeaturesGrid';
import ToolsHero from '@/components/Home/ToolsHero/ToolsHero';
import RegionalMarketplaces from '@/components/Home/RegionalMarketplaces/RegionalMarketplaces';
import LogoMarquee from '@/components/Home/LogoMarquee/LogoMarquee';
import FinancingCTA from '@/components/Home/FinancingCTA/FinancingCTA';
import VideoSection from '@/components/Home/VideoSection/VideoSection';
import InvestorsSection from '@/components/Home/InvestorsSection/InvestorsSection';
import Footer from '@/components/Shared/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SectionHeading />
      <FeaturesGrid />
      <GlobalFeaturesGrid />
      <ToolsHero />
      <RegionalMarketplaces />
      <LogoMarquee />
      <FinancingCTA />
      <VideoSection />
      <InvestorsSection />
      <Footer />
    </div>
  );
};

export default Home;