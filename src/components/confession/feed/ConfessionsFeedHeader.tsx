
import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

interface ConfessionsFeedHeaderProps {
  title?: string; // Title is optional
  subtitle: string;
  confessionsCount: number;
  onRefresh: () => void;
  isLoading: boolean;
}

const ConfessionsFeedHeader: React.FC<ConfessionsFeedHeaderProps> = ({
  title,
  subtitle,
  confessionsCount,
  onRefresh,
  isLoading,
}) => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-4 mb-6">
        {title ? ( // If a title is provided and not an empty string
          <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {title}
          </h2>
        ) : (
          // If no title is provided (e.g., for the "All" category view), display this custom text
          <p className="text-lg text-gray-400 italic">
            Real stories from real people. Read them, listen to them, feel them.
          </p>
        )}
        <Button
          onClick={onRefresh}
          variant="ghost"
          size="sm"
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
          disabled={isLoading}
        >
          <RefreshCw className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} />
        </Button>
      </div>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30">
        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
        {confessionsCount} confessions available
      </div>
    </div>
  );
};

export default ConfessionsFeedHeader;
