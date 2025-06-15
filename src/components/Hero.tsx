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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Professional Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30"></div>
      </div>

      {/* Professional Floating Elements with Enhanced Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-bounce-in animation-delay-200"></div>
        <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-fade-in-scale animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-slide-in-up animation-delay-600"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-500/15 rounded-full blur-2xl animate-smooth-fade-in animation-delay-800"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-emerald-500/15 rounded-full blur-3xl animate-elegant-slide animation-delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Professional Logo Section with Enhanced Animations */}
        <div className="mb-16 animate-bounce-in">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-3xl scale-150 animate-pulse"></div>
            
          </div>
          
        </div>

        {/* Enhanced Brand Title with Text Shimmer */}
        <div className="mb-16 animate-slide-in-up animation-delay-200">
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
            <span className="text-shimmer">
              Confession
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse text-7xl md:text-9xl lg:text-[10rem]">
              X
            </span>
          </h1>
          
          {/* Dynamic Tagline with Professional Typography */}
          <h2 key={currentText} className="text-3xl md:text-5xl lg:text-6xl text-white/95 font-light mb-8 transition-all duration-1000 animate-fade-in-scale min-h-[4rem] md:min-h-[6rem] leading-tight">
            {dynamicTexts[currentText]}
          </h2>
          <p className="text-xl text-gray-200/90 max-w-5xl mx-auto leading-relaxed animate-elegant-slide animation-delay-600 md:text-2xl font-light">
            Unfiltered voices. No signups. Just the truth. Real stories that matter.
          </p>
        </div>

        {/* Professional CTA Section with Enhanced Animations */}
        <div className="animate-bounce-in animation-delay-400 mb-16">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button onClick={scrollToConfessions} size="lg" className="group bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white px-16 py-8 text-2xl font-semibold rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-115 transform relative overflow-hidden enhanced-button">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-4">
                <span className="text-3xl animate-bounce">👁️</span>
                Browse Confessions
              </span>
            </Button>
            
            <Button onClick={openSubmissionForm} variant="outline" size="lg" className="group border-3 border-purple-400/60 text-purple-200 hover:bg-purple-400/30 hover:border-purple-300 hover:text-white px-16 py-8 text-2xl font-semibold rounded-3xl transition-all duration-500 hover:scale-115 transform backdrop-blur-md bg-white/10 relative overflow-hidden enhanced-button">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-4">
                <span className="text-3xl animate-bounce animation-delay-200">✍️</span>
                Submit Your Confession
              </span>
            </Button>
          </div>

          {/* Professional Stats with Enhanced Animations */}
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-300 animate-fade-in-scale animation-delay-800">
            <div className="flex items-center gap-3 card-hover p-4 rounded-2xl bg-white/5 backdrop-blur-md">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">100% Anonymous</span>
            </div>
            <div className="flex items-center gap-3 card-hover p-4 rounded-2xl bg-white/5 backdrop-blur-md animation-delay-200">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{
              animationDelay: '1s'
            }}></div>
              <span className="text-lg font-medium">No Registration</span>
            </div>
            <div className="flex items-center gap-3 card-hover p-4 rounded-2xl bg-white/5 backdrop-blur-md animation-delay-400">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{
              animationDelay: '2s'
            }}></div>
              <span className="text-lg font-medium">Safe Space</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-16 border-2 border-purple-400/70 rounded-full flex justify-center bg-white/15 backdrop-blur-md shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-3 animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-300 mt-3 font-medium tracking-wide animate-pulse">SCROLL</p>
        </div>
      </div>
    </section>;
};
export default Hero;