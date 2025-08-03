'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Star } from 'lucide-react';

export default function IdentitySection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Nossa Identidade</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça nossos pilares que fundamentam nossa atuação no mercado moçambicano
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="icon-bg mx-auto mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">Missão</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Proporcionar serviços de mediação de seguros com qualidade, ética e excelência</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contribuindo para o sucesso e proteção dos nossos clientes</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="icon-bg mx-auto mb-4">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">Visão</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Ser referência no mercado moçambicano como uma empresa comprometida</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Com inovação, satisfação do cliente e desenvolvimento sustentável</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="icon-bg mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">Valores</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Compromisso, Proteção e Responsabilidade Social</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Servindo e acompanhando pessoas com ética e qualidade</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}