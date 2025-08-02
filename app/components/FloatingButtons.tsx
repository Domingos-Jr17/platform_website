'use client';

import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      <motion.a 
        href="tel:+258877970000" 
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors" 
        aria-label="Ligar para a Platform Seguros"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone size={20} />
      </motion.a>
      <motion.a 
        href="mailto:comercial@platformseguros.com" 
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors" 
        aria-label="Enviar e-mail para a Platform Seguros"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Mail size={20} />
      </motion.a>
    </div>
  );
}