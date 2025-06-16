
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Languages with enhanced visual data
const languageCategories = [
  {
    id: "te",
    name: "Telugu",
    icon: "🔵",
    slug: "te",
    color: "from-blue-500 to-blue-700",
    hoverColor: "from-blue-400 to-blue-600",
    accent: "bg-blue-500",
    textColor: "text-blue-100"
  },
  {
    id: "hi",
    name: "Hindi",
    icon: "🇮🇳",
    slug: "hi",
    color: "from-orange-500 to-red-600",
    hoverColor: "from-orange-400 to-red-500",
    accent: "bg-orange-500",
    textColor: "text-orange-100"
  },
  {
    id: "en",
    name: "English",
    icon: "🌍",
    slug: "en",
    color: "from-emerald-500 to-teal-700",
    hoverColor: "from-emerald-400 to-teal-600",
    accent: "bg-emerald-500",
    textColor: "text-emerald-100"
  },
  {
    id: "ta",
    name: "Tamil",
    icon: "🟣",
    slug: "ta",
    color: "from-purple-500 to-violet-700",
    hoverColor: "from-purple-400 to-violet-600",
    accent: "bg-purple-500",
    textColor: "text-purple-100"
  },
  {
    id: "kn",
    name: "Kannada",
    icon: "🔴",
    slug: "kn",
    color: "from-red-500 to-pink-700",
    hoverColor: "from-red-400 to-pink-600",
    accent: "bg-red-500",
    textColor: "text-red-100"
  },
];

interface LanguageCategoriesNavProps {
  selectedLanguageSlug: string | null;
  onSelectLanguage: (languageSlug: string) => void;
}

const LanguageCategoriesNav: React.FC<LanguageCategoriesNavProps> = ({
  selectedLanguageSlug,
  onSelectLanguage,
}) => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Dynamic Background with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-blue-900/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-3 sm:mb-4 animate-fade-in-scale">
              Choose Your Language
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discover authentic stories from diverse communities across languages
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {languageCategories.map((language, index) => {
            const isActive = language.slug === selectedLanguageSlug;
            return (
              <div
                key={language.id}
                className="animate-fade-in-scale"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <Button
                  variant="ghost"
                  onClick={() => onSelectLanguage(language.slug)}
                  className={cn(
                    "group relative w-full h-24 sm:h-28 md:h-32 lg:h-36 p-0 overflow-hidden",
                    "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl",
                    "hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25",
                    "transition-all duration-500 ease-out",
                    "flex flex-col items-center justify-center gap-2 sm:gap-3",
                    isActive && [
                      "scale-105 shadow-2xl ring-2 ring-white/30",
                      "bg-gradient-to-br", language.color
                    ]
                  )}
                >
                  {/* Background Effects */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    "bg-gradient-to-br", language.hoverColor
                  )}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-1 sm:gap-2">
                    {/* Icon with Glow */}
                    <div className="relative">
                      <span 
                        role="img" 
                        aria-label={language.name} 
                        className="text-xl sm:text-2xl md:text-3xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                      >
                        {language.icon}
                      </span>
                      {isActive && (
                        <div className="absolute inset-0 animate-ping">
                          <span className="text-xl sm:text-2xl md:text-3xl opacity-75">{language.icon}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Language Name */}
                    <span className={cn(
                      "font-semibold text-xs sm:text-sm md:text-base tracking-wide text-center",
                      isActive ? "text-white" : "text-gray-200 group-hover:text-white"
                    )}>
                      {language.name}
                    </span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                    )}
                  </div>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-white/10">
          {[
            { icon: "🌟", text: "5 Languages", color: "text-yellow-400" },
            { icon: "🔥", text: "Real Stories", color: "text-red-400" },
            { icon: "🎯", text: "Authentic", color: "text-green-400" },
            { icon: "💎", text: "Premium Quality", color: "text-blue-400" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm animate-fade-in"
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <span className={cn("text-sm sm:text-base", stat.color)} role="img">{stat.icon}</span>
              <span className="font-medium">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div>
    </section>
  );
};

export default LanguageCategoriesNav;
