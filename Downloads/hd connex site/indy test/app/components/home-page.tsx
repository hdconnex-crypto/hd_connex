
'use client';

import HeroSection from './hero-section';
import PrimarySearchSection from './primary-search-section';
import ServiceCategoriesSection from './service-categories-section';
import EnhancedTrustSection from './enhanced-trust-section';
import LeadCaptureForm from './lead-capture-form';
import ContractorValueProp from './contractor-value-prop';
import ReviewsSection from './reviews-section';

interface HomePageProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <PrimarySearchSection onNavigate={onNavigate} />
      <ServiceCategoriesSection onNavigate={onNavigate} />
      <EnhancedTrustSection onNavigate={onNavigate} />
      <LeadCaptureForm />
      <ContractorValueProp onNavigate={onNavigate} />
      <ReviewsSection />
    </>
  );
}
