
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConfessions } from '@/hooks/useConfessions';
import ConfessionsFeedHeader from './confession/feed/ConfessionsFeedHeader';
import ConfessionsGrid from './confession/feed/ConfessionsGrid';
import ConfessionsFeedControls from './confession/feed/ConfessionsFeedControls';

const ConfessionsFeed = () => {
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
  } = useConfessions();

  useEffect(() => {
    // Cleanup audio when the component unmounts or confessions data changes significantly
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const currentVisibleCount = Math.min(visibleCount, totalConfessionsCount);
  const showingStatsText = t('feed.showingStats')
    .replace('{count}', currentVisibleCount.toString())
    .replace('{total}', totalConfessionsCount.toString());

  return (
    <section id="confessions-feed" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <ConfessionsFeedHeader
          title={t('feed.title')}
          subtitle={t('feed.subtitle')}
          confessionsCount={totalConfessionsCount}
          onRefresh={refreshFeed}
          isLoading={isLoadingInitial || isLoadingMore} // Combined loading state for refresh button
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
          showingStatsText={showingStatsText}
          loadMoreText={t('feed.loadMore')}
          loadingText={t('feed.loading')} // Assuming you have 'feed.loading' translation
        />
      </div>
    </section>
  );
};

export default ConfessionsFeed;
