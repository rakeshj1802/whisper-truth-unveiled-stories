
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Languages: Telugu, Hindi, English, Tamil, Kannada
const languageCategories = [
  {
    id: "te",
    name: "Telugu",
    icon: "🔵",
    slug: "te",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "hi",
    name: "Hindi",
    icon: "🇮🇳",
    slug: "hi",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "en",
    name: "English",
    icon: "🌍",
    slug: "en",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "ta",
    name: "Tamil",
    icon: "🟣",
    slug: "ta",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: "kn",
    name: "Kannada",
    icon: "🔴",
    slug: "kn",
    color: "from-red-500 to-pink-600"
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
    <nav className="relative bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border-y border-purple-500/20 shadow-2xl">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      
      {/* Content Container */}
      <div
        className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 md:py-6 flex flex-col"
        style={{ minHeight: 'unset' }}
      >
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 px-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
            Choose Your Language
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Select a language to explore authentic confessions
          </p>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="mx-auto w-full overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">
          <NavigationMenuList className="flex flex-row sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 md:gap-6 min-w-max">
            {languageCategories.map((language, index) => {
              const isActive = language.slug === selectedLanguageSlug;
              return (
                <NavigationMenuItem key={language.id}>
                  <Button
                    variant="ghost"
                    onClick={() => onSelectLanguage(language.slug)}
                    className={cn(
                      "group relative overflow-hidden px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-auto rounded-2xl",
                      "bg-white/5 backdrop-blur-md border border-white/10",
                      "hover:bg-white/10 hover:border-purple-400/50 hover:scale-105",
                      "transition-all duration-500 ease-out",
                      "text-white/90 hover:text-white",
                      "shadow-lg hover:shadow-purple-500/25",
                      isActive && [
                        "bg-gradient-to-r", language.color,
                        "border-transparent shadow-xl scale-105",
                        "text-white ring-2 ring-white/20"
                      ],
                      "animate-fade-in-scale"
                    )}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both',
                      minWidth: '110px'
                    }}
                  >
                    {/* Background Gradient Effect */}
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                      "bg-gradient-to-r", language.color
                    )}></div>
                    
                    {/* Active State Background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
                    )}
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2 sm:gap-3">
                      <span 
                        role="img" 
                        aria-label={language.name} 
                        className="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform duration-300"
                      >
                        {language.icon}
                      </span>
                      <span className="font-semibold text-base sm:text-lg tracking-wide">
                        {language.name}
                      </span>
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse ml-1"></div>
                      )}
                    </div>
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Professional Stats Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 w-full px-2">
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>5 Languages Available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>Culturally Authentic</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <span>Real Stories</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 sm:w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </nav>
  );
};

export default LanguageCategoriesNav;
