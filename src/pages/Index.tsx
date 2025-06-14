
import Hero from '../components/Hero';
import ConfessionsFeed from '../components/ConfessionsFeed';
import SubmitSection from '../components/SubmitSection';
// Removed AdSpace import
import Footer from '../components/Footer';
import MobileNavBar from '../components/MobileNavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <ConfessionsFeed />
      {/* Removed AdSpace type="banner" */}
      <SubmitSection />
      {/* Removed AdSpace type="square" */}
      <Footer />
      <MobileNavBar />
    </div>
  );
};

export default Index;
