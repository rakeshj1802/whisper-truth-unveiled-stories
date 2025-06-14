
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle // We can use this for styling if needed, or create custom styles
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // Using Link for potential future routing

const categories = [
  { name: "Desires & Fantasies", href: "/category/desires-fantasies" },
  { name: "Love & Heartbreak", href: "/category/love-heartbreak" },
  { name: "Secrets & Scandals", href: "/category/secrets-scandals" },
  { name: "Life & Emotions", href: "/category/life-emotions" },
  { name: "Fiction & Roleplay", href: "/category/fiction-roleplay" },
  { name: "First Times & Experiences", href: "/category/first-times-experiences" },
];

const CategoriesNav = () => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-md py-3 border-b border-t border-gray-700 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-1 md:gap-2">
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <Link to={category.href}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 focus:bg-purple-500/20 focus:text-purple-300 text-xs sm:text-sm"
                    )}
                  >
                    {category.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default CategoriesNav;
