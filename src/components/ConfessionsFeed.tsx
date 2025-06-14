
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConfessions } from '@/hooks/useConfessions';
import ConfessionsFeedHeader from './confession/feed/ConfessionsFeedHeader';
import ConfessionsGrid from './confession/feed/ConfessionsGrid';
import ConfessionsFeedControls from './confession/feed/ConfessionsFeedControls';

interface ConfessionsFeedProps {
  categoryName?: string | null; // Make categoryName optional, defaults to "All" in useConfessions
}

const ConfessionsFeed: React.FC<ConfessionsFeedProps> = ({ categoryName }) => {
  const { t } = useLanguage();
  const {
    confessions,
    expandedCards,
    playingAudio,
    visibleCount,
    isLoadingInitial,
    isLoadingMore,
    toggleExpanded,
    toggleAudio,
    loadMore,
    refreshFeed,
    totalConfessionsCount,
    currentAudio
  } = useConfessions({ categoryName: categoryName || "All" }); // Pass categoryName to hook, default to "All"

  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const feedTitle = categoryName && categoryName.toLowerCase() !== 'all' 
    ? `${categoryName} Confessions` 
    : ""; // Changed from t('feed.title') to an empty string for "All" category
  
  // Subtitle could also be dynamic if desired, or use a generic one
  const feedSubtitle = categoryName && categoryName.toLowerCase() !== 'all'
    ? `Browse stories shared in the ${categoryName} category`
    : t('feed.subtitle');


  return (
    <section id="confessions-feed" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <ConfessionsFeedHeader
          title={feedTitle}
          subtitle={feedSubtitle}
          confessionsCount={totalConfessionsCount}
          onRefresh={refreshFeed}
          isLoading={isLoadingInitial || isLoadingMore}
        />

        <ConfessionsGrid
          confessions={confessions}
          visibleCount={visibleCount}
          expandedCards={expandedCards}
          playingAudio={playingAudio}
          onToggleExpanded={toggleExpanded}
          onToggleAudio={toggleAudio}
          isLoadingInitial={isLoadingInitial}
        />

        <ConfessionsFeedControls
          visibleCount={visibleCount}
          totalConfessions={totalConfessionsCount}
          onLoadMore={loadMore}
          isLoadingMore={isLoadingMore}
          loadMoreText={t('feed.loadMore')} // Changed from direct string
          loadingText={t('feed.loading')}
        />
      </div>
    </section>
  );
};

export default ConfessionsFeed;

