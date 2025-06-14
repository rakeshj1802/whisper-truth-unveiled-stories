
import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

interface ConfessionsFeedControlsProps {
  visibleCount: number;
  totalConfessions: number;
  onLoadMore: () => void;
  isLoadingMore: boolean;
  // showingStatsText prop removed from interface
  loadMoreText: string;
  loadingText: string;
}

const ConfessionsFeedControls: React.FC<ConfessionsFeedControlsProps> = ({
  visibleCount,
  totalConfessions,
  onLoadMore,
  isLoadingMore,
  // showingStatsText removed from destructuring
  loadMoreText,
  loadingText,
}) => {
  return (
    <>
      {visibleCount < totalConfessions && (
        <div className="text-center my-8"> {/* Added my-8 for spacing, as the stats text below is removed */}
          <Button
            onClick={onLoadMore}
            variant="outline"
            size="lg"
            disabled={isLoadingMore}
            className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            {isLoadingMore ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin mr-3" />
                {loadingText}
              </>
            ) : (
              loadMoreText
            )}
          </Button>
        </div>
      )}
      {/* Removed the div that displayed showingStatsText */}
    </>
  );
};

export default ConfessionsFeedControls;

