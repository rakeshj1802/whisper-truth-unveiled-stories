import React from 'react';
import { useParams } from 'react-router-dom';
import { useConfessions } from '@/hooks/useConfessions';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories as allCategoriesData } from '@/data/categories';

import CategoriesNav from '@/components/CategoriesNav';
import ConfessionsFeedHeader from '@/components/confession/feed/ConfessionsFeedHeader';
import ConfessionsGrid from '@/components/confession/feed/ConfessionsGrid';
import ConfessionsFeedControls from '@/components/confession/feed/ConfessionsFeedControls';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { t } = useLanguage();

  const currentCategory = allCategoriesData.find(cat => cat.slug === categorySlug);

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
  } = useConfessions({ categorySlug });

  React.useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const pageTitle = currentCategory ? currentCategory.name : t('categoryPage.loadingTitle');
  
  const pageSubtitle = currentCategory 
    ? currentCategory.subtitle 
    : t('categoryPage.loadingSubtitle');
  
  console.log(`Rendering CategoryPage for slug: ${categorySlug}, title: ${pageTitle}, subtitle: ${pageSubtitle}, count: ${totalConfessionsCount}`);


  return (
    <div className="min-h-screen bg-gray-900">
      <CategoriesNav /> 
      
      <section id="category-confessions-feed" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <ConfessionsFeedHeader
            title={pageTitle}
            subtitle={pageSubtitle} // This will now use the new specific subtitle
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
            loadMoreText={t('feed.loadMore')}
            loadingText={t('feed.loading')}
          />
        </div>
      </section>
      
      <Footer />
      <MobileNavBar />
    </div>
  );
};

export default CategoryPage;
