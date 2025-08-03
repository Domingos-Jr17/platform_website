'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./components/sections/HeroSection'), {
  loading: () => <div className="h-[500px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

const IdentitySection = dynamic(() => import('./components/sections/IdentitySection'), {
  loading: () => <div className="h-[500px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

const ServicesSection = dynamic(() => import('./components/sections/ServicesSection'), {
  loading: () => <div className="h-[600px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

const TestimonialsSection = dynamic(() => import('./components/sections/TestimonialsSection'), {
  loading: () => <div className="h-[500px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

const StatsSection = dynamic(() => import('./components/sections/StatsSection'), {
  loading: () => <div className="h-[300px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

const PartnersBannerSection = dynamic(() => import('./components/sections/PartnersBannerSection'), {
  loading: () => <div className="h-[200px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

const CtaSection = dynamic(() => import('./components/sections/CtaSection'), {
  loading: () => <div className="h-[300px] bg-gray-100 dark:bg-gray-900 animate-pulse" />,
  ssr: false
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdentitySection />
      <ServicesSection />
      <TestimonialsSection />
      <StatsSection />
      <PartnersBannerSection />
      <CtaSection
        title="Pronto para proteger o que mais importa?"
        subtitle="Entre em contato hoje mesmo e descubra as melhores soluções de seguros para você e sua família."
        buttonText="Solicite uma Cotação"
        buttonLink="/contato#orcamento"
      />
    </>
  );
}