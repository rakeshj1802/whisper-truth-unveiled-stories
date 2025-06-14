
import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategoriesNav from '../components/CategoriesNav';
import ConfessionsFeed from '../components/ConfessionsFeed';
import SubmitSection from '../components/SubmitSection';
import Footer from '../components/Footer';
import MobileNavBar from '../components/MobileNavBar';
import { categories as categoryData } from '@/data/categories'; // To find name from slug

const Index = () => {
  // Default to "all" category slug. The CategoriesNav will pass the slug.
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>("all");

  const handleSelectCategory = (categorySlug: string) => {
    setSelectedCategorySlug(categorySlug);
  };

  // Find the category name from the slug to pass to ConfessionsFeed
  // "all" slug maps to "All" name. Other slugs should map to their respective names.
  const currentCategory = categoryData.find(cat => cat.slug === selectedCategorySlug);
  const categoryNameForFeed = currentCategory ? currentCategory.name : "All";


  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <CategoriesNav 
        selectedCategorySlug={selectedCategorySlug}
        onSelectCategory={handleSelectCategory}
      />
      <ConfessionsFeed categoryName={categoryNameForFeed} /> {/* Pass categoryName */}
      <SubmitSection />
      <Footer />
      <MobileNavBar />
    </div>
  );
};

export default Index;
