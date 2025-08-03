'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
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
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A satisfação de nossos clientes é nosso maior compromisso
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Quote className="text-[var(--primary)] mr-2" size={20} />
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              &quot;A Platform Seguros transformou minha experiência com seguros. Atendimento rápido e soluções que realmente atendem às minhas necessidades.&quot;
            </p>
            <div className="flex items-center">
              <div className="bg-gray-300 dark:bg-gray-600 rounded-full w-10 h-10 mr-3"></div>
              <div>
                <h4 className="font-bold">Carlos M.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cliente desde 2020</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Quote className="text-[var(--primary)] mr-2" size={20} />
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              &quot;Como empresário, preciso de segurança e confiança. A Platform oferece isso com um serviço personalizado e eficiente.&quot;
            </p>
            <div className="flex items-center">
              <div className="bg-gray-300 dark:bg-gray-600 rounded-full w-10 h-10 mr-3"></div>
              <div>
                <h4 className="font-bold">Ana L.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cliente desde 2019</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <Quote className="text-[var(--primary)] mr-2" size={20} />
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              &quot;O suporte durante o processo de sinistro foi excepcional. Sentimos que realmente tínhamos alguém do nosso lado.&quot;
            </p>
            <div className="flex items-center">
              <div className="bg-gray-300 dark:bg-gray-600 rounded-full w-10 h-10 mr-3"></div>
              <div>
                <h4 className="font-bold">Jorge S.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cliente desde 2021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}