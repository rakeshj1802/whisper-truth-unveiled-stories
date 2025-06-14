
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Hardcoded language categories for now, can be moved to categories.ts if desired
const languageCategories = [
  {
    id: "en",
    name: "English",
    icon: "🌍",
    slug: "en",
  },
  {
    id: "hi",
    name: "Hindi",
    icon: "🇮🇳",
    slug: "hi",
  },
  // Add more languages as needed ...
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
    <nav className="bg-gray-800/50 backdrop-blur-md py-3 border-b border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-1 md:gap-2">
            {languageCategories.map((language, index) => {
              const isActive = language.slug === selectedLanguageSlug;
              return (
                <NavigationMenuItem key={language.id}>
                  <Button
                    variant="ghost"
                    onClick={() => onSelectLanguage(language.slug)}
                    className={cn(
                      "text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 focus:bg-purple-500/20 focus:text-purple-300 text-xs sm:text-sm px-2 py-1 h-auto sm:px-3",
                      "transition-all duration-200 ease-in-out hover:scale-105",
                      isActive && "bg-purple-600/30 text-purple-200 ring-1 ring-purple-500 scale-105",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span role="img" aria-label={language.name} className="mr-1.5 sm:mr-2">
                      {language.icon}
                    </span>
                    {language.name}
                  </Button>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default LanguageCategoriesNav;
