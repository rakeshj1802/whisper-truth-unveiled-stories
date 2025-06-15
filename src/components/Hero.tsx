
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
      {/* Enhanced Background with Professional Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/90 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20"></div>
      </div>

      {/* Professional Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Professional Logo Section */}
        <div className="mb-16 animate-fade-in">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-full blur-3xl scale-150 animate-pulse"></div>
            <img 
              src="/lovable-uploads/b0878ead-54eb-40b1-9283-51cd3e8f1354.png" 
              alt="ConfessionX Logo" 
              className="relative w-56 h-56 md:w-72 md:h-72 mx-auto transition-all duration-700 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.4))',
                animation: 'subtleFloat 8s ease-in-out infinite, glowPulse 3s ease-in-out infinite'
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Brand Title */}
        <div className="mb-16 animate-fade-in animation-delay-200">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Confession
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              X
            </span>
          </h1>
          
          {/* Dynamic Tagline with Professional Typography */}
          <h2 
            key={currentText}
            className="text-2xl md:text-4xl lg:text-5xl text-white/90 font-light mb-8 transition-all duration-1000 animate-fade-in min-h-[3rem] md:min-h-[4rem] leading-tight"
          >
            {dynamicTexts[currentText]}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300/80 font-light max-w-4xl mx-auto leading-relaxed">
            Unfiltered voices. No signups. Just the truth. Real stories that matter.
          </p>
        </div>

        {/* Professional CTA Section */}
        <div className="animate-fade-in animation-delay-400 mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={scrollToConfessions}
              size="lg"
              className="group bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-110 transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3">
                <span className="text-2xl">👁️</span>
                Browse Confessions
              </span>
            </Button>
            
            <Button 
              onClick={openSubmissionForm}
              variant="outline"
              size="lg"
              className="group border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/20 hover:border-purple-300 hover:text-white px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-md bg-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3">
                <span className="text-2xl">✍️</span>
                Submit Your Confession
              </span>
            </Button>
          </div>

          {/* Professional Stats or Features */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">100% Anonymous</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm font-medium">No Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-sm font-medium">Safe Space</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-purple-400/60 rounded-full flex justify-center bg-white/10 backdrop-blur-md shadow-lg">
            <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium tracking-wide">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
