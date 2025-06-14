
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

interface AdSidebarProps {
  linkUrl?: string;
  className?: string;
}

const AdSidebar = ({ linkUrl = "#", className = "" }: AdSidebarProps) => {
  const handleAdClick = () => {
    if (linkUrl && linkUrl !== "#") {
      window.open(linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className={`bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 ${className}`}
      onClick={handleAdClick}
    >
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform">
            <ExternalLink className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Sidebar Ad</h3>
          <p className="text-gray-500 text-sm mb-2">300 x 250</p>
          <p className="text-xs text-gray-600 mb-3">Premium Advertisement Space</p>
          <div className="text-xs text-blue-400 opacity-75">
            Click to add your ad link
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdSidebar;
