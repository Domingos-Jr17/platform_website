'use client';

//import { OptimizedHeroImage } from '../ui/OptimizedHeroImage';
import { motion } from 'framer-motion';
import { Check, Shield, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 text-white" style={{backgroundColor: '#003366'}}>
      {/* <OptimizedHeroImage /> */}
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Proteção e Inovação em Seguros para Moçambique
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Soluções personalizadas em Vida, Não Vida e Serviços Adicionais com a qualidade e confiança que você merece
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/contato#orcamento"
              className="btn-primary shadow-lg py-3 px-8 font-bold text-white hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicite uma Cotação
            </motion.a>
            <motion.a
              href="/contato"
              className="btn-secondary py-3 px-8 font-bold text-white hover:bg-white hover:text-[var(--primary)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale com um Especialista
            </motion.a>
          </div>
        </motion.div>
        
        {/* Selos de Confiança */}
        <motion.div 
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-white text-[var(--primary)] rounded-full p-3 mb-2">
              <Check size={24} />
            </div>
            <span className="text-sm">Certificado</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-[var(--primary)] rounded-full p-3 mb-2">
              <Shield size={24} />
            </div>
            <span className="text-sm">Seguro</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-[var(--primary)] rounded-full p-3 mb-2">
              <Star size={24} />
            </div>
            <span className="text-sm">5 Estrelas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}