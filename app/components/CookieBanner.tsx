'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Cookie className="mr-4" size={48} />
          <p className="text-sm">
            Nós usamos cookies para melhorar a sua experiência. Ao continuar a navegar, você concorda com a nossa{
              ' '}
            <Link href="/politica-privacidade" className="underline hover:text-gray-300">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Aceitar
          </button>
          <button
            onClick={declineCookies}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Recusar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
