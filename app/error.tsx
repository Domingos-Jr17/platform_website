'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center px-4">
      <motion.h1 
        className="text-9xl font-bold text-red-600 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Erro
      </motion.h1>
      <motion.h2 
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Algo deu errado!
      </motion.h2>
      <motion.p 
        className="text-lg mb-8 max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Pedimos desculpas pelo inconveniente. Por favor, tente novamente mais tarde.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="btn-primary inline-block py-3 px-8 font-bold text-white mr-4"
        >
          Tentar Novamente
        </button>
        <Link href="/" className="btn-secondary inline-block py-3 px-8 font-bold text-gray-800 dark:text-gray-200">
          Voltar para a Página Inicial
        </Link>
      </motion.div>
    </div>
  );
}