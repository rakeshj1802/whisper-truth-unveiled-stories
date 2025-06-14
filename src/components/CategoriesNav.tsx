
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";
import { categories } from "@/data/categories";

const CategoriesNav = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  return (
    <nav className="bg-gray-800/50 backdrop-blur-md py-3 border-b border-t border-gray-700 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-1 md:gap-2">
            {categories.map((category) => {
              const isActive = category.slug === categorySlug;
              return (
                <NavigationMenuItem key={category.id}>
                  <Link to={category.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 focus:bg-purple-500/20 focus:text-purple-300 text-xs sm:text-sm",
                        "transition-all duration-200 ease-in-out hover:scale-105", // Added for animation
                        isActive && "bg-purple-600/30 text-purple-200 ring-1 ring-purple-500 scale-105" // Enhanced active state
                      )}
                    >
                      <span role="img" aria-label={category.name} className="mr-1.5 sm:mr-2">{category.icon}</span>
                      {category.name}
                    </NavigationMenuLink>
                  </Link>
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
