
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu"; // NavigationMenuLink removed
import { Button } from "@/components/ui/button"; // Using Button for filter items
import { cn } from "@/lib/utils";
import { categories } // Assuming this is the updated categories list from src/data/categories
  from "@/data/categories"; 

interface CategoriesNavProps {
  selectedCategorySlug: string | null; // Slug of the category, e.g., "all", "love-lust"
  onSelectCategory: (categorySlug: string) => void; // Callback with category slug
}

const CategoriesNav: React.FC<CategoriesNavProps> = ({ selectedCategorySlug, onSelectCategory }) => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-md py-3 border-b border-t border-gray-700 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-1 md:gap-2">
            {categories.map((category) => {
              const isActive = category.slug === selectedCategorySlug;
              return (
                <NavigationMenuItem key={category.id}>
                  <Button
                    variant="ghost"
                    onClick={() => onSelectCategory(category.slug)}
                    className={cn(
                      "text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 focus:bg-purple-500/20 focus:text-purple-300 text-xs sm:text-sm px-2 py-1 h-auto sm:px-3",
                      "transition-all duration-200 ease-in-out hover:scale-105",
                      isActive && "bg-purple-600/30 text-purple-200 ring-1 ring-purple-500 scale-105"
                    )}
                  >
                    <span role="img" aria-label={category.name} className="mr-1.5 sm:mr-2">{category.icon}</span>
                    {category.name}
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

export default CategoriesNav;
