
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToConfessions = () => {
    document.getElementById('confessions-feed')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSubmissionForm = () => {
    window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Confession<span className="text-purple-400">X</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Tagline */}
        <div className="mb-12 animate-fade-in animation-delay-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light mb-4">
            Read Raw, Real Anonymous Confessions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            Unfiltered voices. No signups. Just the truth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
          <Button 
            onClick={scrollToConfessions}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Browse Confessions
          </Button>
          
          <Button 
            onClick={openSubmissionForm}
            variant="outline"
            size="lg"
            className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Submit Your Confession
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
