
import React from 'react';
import ConfessionCard from '../ConfessionCard';
import { Confession } from '@/types/confessionTypes';
import { RefreshCw } from 'lucide-react';

interface ConfessionsGridProps {
  confessions: Confession[];
  visibleCount: number;
  expandedCards: Set<string>;
  playingAudio: string | null;
  onToggleExpanded: (id: string) => void;
  onToggleAudio: (audioUrl: string, confessionId: string) => void;
  isLoadingInitial: boolean;
}

const ConfessionsGrid: React.FC<ConfessionsGridProps> = ({
  confessions,
  visibleCount,
  expandedCards,
  playingAudio,
  onToggleExpanded,
  onToggleAudio,
  isLoadingInitial,
}) => {
  if (isLoadingInitial) {
    return (
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
          <RefreshCw className="w-5 h-5 animate-spin mr-3" />
          Loading confessions...
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
      {confessions.slice(0, visibleCount).map((confession, index) => (
        <div key={confession.id}>
          <div
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ConfessionCard
              confession={confession}
              isExpanded={expandedCards.has(confession.id)}
              onToggleExpanded={() => onToggleExpanded(confession.id)}
              playingAudio={playingAudio}
              onToggleAudio={onToggleAudio}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConfessionsGrid;
