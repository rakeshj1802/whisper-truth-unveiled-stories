
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const dynamicTexts = [
    "Read Raw, Real Anonymous Confessions",
    "Unfiltered Stories from Real People",
    "Authentic Voices, No Judgment",
    "True Stories, Told Anonymously"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToConfessions = () => {
    document.getElementById('confessions-feed')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSubmissionForm = () => {
    window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/80 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Confession
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              X
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Dynamic Tagline */}
        <div className="mb-16 animate-fade-in animation-delay-200">
          <h2 
            key={currentText}
            className="text-2xl md:text-4xl lg:text-5xl text-white font-light mb-6 transition-all duration-1000 animate-fade-in min-h-[3rem] md:min-h-[4rem]"
          >
            {dynamicTexts[currentText]}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Unfiltered voices. No signups. Just the truth. Real stories that matter.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-400">
          <Button 
            onClick={scrollToConfessions}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-110 transform"
          >
            <span className="mr-2">👁️</span>
            Browse Confessions
          </Button>
          
          <Button 
            onClick={openSubmissionForm}
            variant="outline"
            size="lg"
            className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-10 py-5 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-110 transform backdrop-blur-sm bg-white/5"
          >
            <span className="mr-2">✍️</span>
            Submit Your Confession
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center space-x-8 animate-fade-in animation-delay-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">1000+</div>
            <div className="text-sm text-gray-400">Confessions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">24/7</div>
            <div className="text-sm text-gray-400">Anonymous</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">Free</div>
            <div className="text-sm text-gray-400">Forever</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
