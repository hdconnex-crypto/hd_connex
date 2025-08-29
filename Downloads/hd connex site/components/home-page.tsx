
'use client';

import HeroSection from './hero-section';
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
      <LeadCaptureForm />
      <ContractorValueProp onNavigate={onNavigate} />
      <ReviewsSection />
    </>
  );
}
