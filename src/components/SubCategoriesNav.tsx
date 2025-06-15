
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";

interface SubCategoriesNavProps {
  selectedCategorySlug: string | null;
  onSelectCategory: (categorySlug: string) => void;
}

const SubCategoriesNav: React.FC<SubCategoriesNavProps> = ({
  selectedCategorySlug,
  onSelectCategory,
}) => {
  // Exclude language category if present
  const subCategories = categories.filter(category => category.slug !== "all" && category.slug !== "language");

  return (
    <nav className="bg-gray-800/50 backdrop-blur-md py-2 sm:py-3 md:py-4 border-b border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent pb-2">
            {subCategories.map((category, index) => {
              const isActive = category.slug === selectedCategorySlug;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => onSelectCategory(category.slug)}
                  className={cn(
                    "text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 focus:bg-purple-500/20 focus:text-purple-300",
                    "text-xs px-3 py-2 h-auto whitespace-nowrap flex-shrink-0",
                    "transition-all duration-200 ease-in-out hover:scale-105",
                    "rounded-full border border-gray-600/50 hover:border-purple-500/50",
                    isActive && "bg-purple-600/30 text-purple-200 ring-1 ring-purple-500 scale-105 border-purple-500/70",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span role="img" aria-label={category.name} className="mr-1.5 text-sm">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Desktop/Tablet: Flex Wrap */}
        <div className="hidden md:block">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex flex-wrap justify-center gap-2 lg:gap-3">
              {subCategories.map((category, index) => {
                const isActive = category.slug === selectedCategorySlug;
                return (
                  <NavigationMenuItem key={category.id}>
                    <Button
                      variant="ghost"
                      onClick={() => onSelectCategory(category.slug)}
                      className={cn(
                        "text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 focus:bg-purple-500/20 focus:text-purple-300",
                        "text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-2.5 h-auto",
                        "transition-all duration-200 ease-in-out hover:scale-105",
                        "rounded-full border border-gray-600/50 hover:border-purple-500/50",
                        isActive && "bg-purple-600/30 text-purple-200 ring-1 ring-purple-500 scale-105 border-purple-500/70",
                        "animate-fade-in"
                      )}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <span role="img" aria-label={category.name} className="mr-2 text-base lg:text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </Button>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default SubCategoriesNav;
