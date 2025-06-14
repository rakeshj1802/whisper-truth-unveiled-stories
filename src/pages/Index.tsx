
import Hero from '../components/Hero';
import ConfessionsFeed from '../components/ConfessionsFeed';
import SubmitSection from '../components/SubmitSection';
import AdSpace from '../components/AdSpace';
import ReferralBanner from '../components/ReferralBanner';
import Footer from '../components/Footer';
import MobileNavBar from '../components/MobileNavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <ConfessionsFeed />
      <AdSpace type="banner" />
      <SubmitSection />
      <AdSpace type="square" />
      <ReferralBanner />
      <Footer />
      <MobileNavBar />
    </div>
  );
};

export default Index;
