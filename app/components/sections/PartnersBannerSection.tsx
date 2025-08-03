'use client';

import PartnerLogos from '../ui/PartnerLogos';

export default function PartnersBannerSection() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Nossos Parceiros</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <PartnerLogos />
        </div>
      </div>
    </section>
  );
}