
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

interface AdBannerProps {
  title: string;
  size: string;
  description: string;
  linkUrl?: string;
  className?: string;
}

const AdBanner = ({ title, size, description, linkUrl = "#", className = "" }: AdBannerProps) => {
  const handleAdClick = () => {
    if (linkUrl && linkUrl !== "#") {
      window.open(linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className={`bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 ${className}`}
      onClick={handleAdClick}
    >
      <CardContent className="p-8 text-center">
        <div className="flex flex-col items-center justify-center min-h-[120px]">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform">
            <ExternalLink className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">{title}</h3>
          <p className="text-gray-500 mb-2">{size}</p>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="text-xs text-purple-400 mt-2 opacity-75">
            Click to add your advertisement link
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdBanner;
