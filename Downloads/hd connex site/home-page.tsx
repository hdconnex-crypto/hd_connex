
'use client';

import EnhancedSearchHero from './enhanced-search-hero';
import EnhancedCategoryTiles from './enhanced-category-tiles';
import EnhancedTrustCues from './enhanced-trust-cues';
import LeadCaptureForm from './lead-capture-form';
import ContractorValueProp from './contractor-value-prop';
import ReviewsSection from './reviews-section';

interface HomePageProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <EnhancedSearchHero onNavigate={onNavigate} />
      <EnhancedCategoryTiles onNavigate={onNavigate} />
      <EnhancedTrustCues onNavigate={onNavigate} />
      <LeadCaptureForm />
      <ContractorValueProp onNavigate={onNavigate} />
      <ReviewsSection />
    </>
  );
}
