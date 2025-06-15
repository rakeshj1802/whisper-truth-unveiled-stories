import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const dynamicTexts = ["Read Raw, Real Anonymous Confessions", "Unfiltered Stories from Real People", "Authentic Voices, No Judgment", "True Stories, Told Anonymously"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % dynamicTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToConfessions = () => {
    document.getElementById('confessions-feed')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const openSubmissionForm = () => {
    window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Professional Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30"></div>
      </div>

      {/* Professional Floating Elements with Enhanced Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-purple-500/20 rounded-full blur-3xl animate-bounce-in animation-delay-200"></div>
        <div className="absolute top-3/4 right-1/4 w-28 sm:w-44 md:w-56 h-28 sm:h-44 md:h-56 bg-pink-500/20 rounded-full blur-3xl animate-fade-in-scale animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-500/20 rounded-full blur-3xl animate-slide-in-up animation-delay-600"></div>
        <div className="absolute top-1/3 right-1/3 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-cyan-500/15 rounded-full blur-2xl animate-smooth-fade-in animation-delay-800"></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 sm:w-28 md:w-36 h-18 sm:h-28 md:h-36 bg-emerald-500/15 rounded-full blur-3xl animate-elegant-slide animation-delay-1000"></div>
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="relative z-10 text-center px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Professional Logo Section with Enhanced Animations */}
        <div className="mb-8 sm:mb-12 md:mb-16 animate-bounce-in">
          <div className="relative mb-6 sm:mb-8 md:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-3xl scale-150 animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Brand Title with Text Shimmer - Mobile Responsive */}
        <div className="mb-8 sm:mb-12 md:mb-16 animate-slide-in-up animation-delay-200">
          <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            <span className="text-shimmer">
              Confession
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] block sm:inline">
              X
            </span>
          </h1>
          
          {/* Dynamic Tagline with Professional Typography - Mobile Responsive */}
          <h2 
            key={currentText} 
            className="text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl text-white/95 font-light mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 animate-fade-in-scale min-h-[2rem] sm:min-h-[3rem] md:min-h-[4rem] lg:min-h-[6rem] leading-tight text-center px-2"
          >
            {dynamicTexts[currentText]}
          </h2>
          
          <p className="text-gray-200/90 max-w-5xl mx-auto leading-relaxed animate-elegant-slide animation-delay-600 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-light text-center px-4 sm:px-6 md:px-8">
            Unfiltered voices. No signups. Just the truth. Real stories that matter.
          </p>
        </div>

        {/* Professional CTA Section with Enhanced Animations - Mobile Responsive */}
        <div className="animate-bounce-in animation-delay-400 mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center mb-6 sm:mb-8 md:mb-12">
            <Button 
              onClick={scrollToConfessions} 
              size="lg" 
              className="group bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white w-full sm:w-auto px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 sm:hover:scale-115 transform relative overflow-hidden enhanced-button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-bounce">👁️</span>
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl">Browse Confessions</span>
              </span>
            </Button>
            
            <Button 
              onClick={openSubmissionForm} 
              variant="outline" 
              size="lg" 
              className="group border-2 sm:border-3 border-purple-400/60 text-purple-200 hover:bg-purple-400/30 hover:border-purple-300 hover:text-white w-full sm:w-auto px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-2xl sm:rounded-3xl transition-all duration-500 hover:scale-105 sm:hover:scale-115 transform backdrop-blur-md bg-white/10 relative overflow-hidden enhanced-button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-bounce animation-delay-200">✍️</span>
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl">Submit Your Confession</span>
              </span>
            </Button>
          </div>

          {/* Professional Stats with Enhanced Animations - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-12 text-gray-300 animate-fade-in-scale animation-delay-800">
            <div className="flex items-center gap-2 sm:gap-3 card-hover p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">100% Anonymous</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 card-hover p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md animation-delay-200">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">No Registration</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 card-hover p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md animation-delay-400">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Safe Space</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Hidden on small screens */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
