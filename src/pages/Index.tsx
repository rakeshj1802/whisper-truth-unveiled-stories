
import React, { useState } from 'react';
import Hero from '../components/Hero';
import LanguageCategoriesNav from '../components/LanguageCategoriesNav';
import SubCategoriesNav from '../components/SubCategoriesNav';
import ConfessionsFeed from '../components/ConfessionsFeed';
import SubmitSection from '../components/SubmitSection';
import Footer from '../components/Footer';
import MobileNavBar from '../components/MobileNavBar';
import { categories as categoryData } from '@/data/categories'; // To find name from slug

const Index = () => {
  // Language (first step)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  // Category selection (second step)
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);

  // Only show subcategories after picking a language
  const canShowSubCategories = selectedLanguage !== null;

  // Find category by slug for feed title
  const currentCategory = categoryData.find(cat => cat.slug === selectedCategorySlug);
  const categoryNameForFeed = currentCategory ? currentCategory.name : undefined;

  return (
    <div className="min-h-screen bg-gray-900 w-full overflow-x-hidden">
      <Hero />
      {/* 1. Language selection */}
      <LanguageCategoriesNav
        selectedLanguageSlug={selectedLanguage}
        onSelectLanguage={(slug) => {
          setSelectedLanguage(slug);
          // Reset category on language change
          setSelectedCategorySlug(null);
        }}
      />
      {/* 2. Subcategories only if language is picked */}
      {canShowSubCategories && (
        <SubCategoriesNav
          selectedCategorySlug={selectedCategorySlug}
          onSelectCategory={setSelectedCategorySlug}
        />
      )}
      {/* Confessions Feed is now always visible, filtered by selections */}
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <ConfessionsFeed
          categoryName={categoryNameForFeed}
        />
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <SubmitSection />
      </div>
      <Footer />
      <MobileNavBar />
    </div>
  );
};

export default Index;
