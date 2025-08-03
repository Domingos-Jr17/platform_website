'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-16" style={{backgroundColor: '#003366'}}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="text-blue-200 dark:text-blue-300">Clientes Atendidos</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-200 dark:text-blue-300">Anos de Experiência</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-blue-200 dark:text-blue-300">Satisfação</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-200 dark:text-blue-300">Suporte Disponível</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}