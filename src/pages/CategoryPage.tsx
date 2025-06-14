
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

  // Effect for audio cleanup (copied from ConfessionsFeed.tsx)
  React.useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const pageTitle = currentCategory ? currentCategory.name : t('categoryPage.loadingTitle');
  // For subtitles that include dynamic data, we might need a different approach if `t` doesn't support interpolation directly.
  // For now, constructing the string and then translating parts or having pre-formatted translation keys is an option.
  // Assuming 'categoryPage.subtitle' is a generic key and we append the category name.
  // Or, a better key would be 'categoryPage.subtitleNamed' which expects a {categoryName} parameter.
  // Let's assume simple keys for now to fix the TS error.
  // A more robust solution would involve checking how `t` handles interpolations.
  const pageSubtitle = currentCategory 
    ? `${t('categoryPage.exploreConfessionsIn')} ${currentCategory.name}` // Example, assuming 'categoryPage.exploreConfessionsIn' is a key
    : t('categoryPage.loadingSubtitle');
  
  // If your translation function `t` supports interpolation like t('key', { value: 'foo' }), use that.
  // For example: t('categoryPage.subtitle', { categoryName: currentCategory.name })
  // For simplicity here and to pass TypeScript checks, I'm constructing the string.
  // You might need to adjust your translation files and `t` function usage for dynamic content.

  console.log(`Rendering CategoryPage for slug: ${categorySlug}, title: ${pageTitle}, count: ${totalConfessionsCount}`);


  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero is not part of category page, CategoriesNav is sticky from Index or can be here */}
      <CategoriesNav /> 
      
      <section id="category-confessions-feed" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <ConfessionsFeedHeader
            title={pageTitle}
            subtitle={pageSubtitle}
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
