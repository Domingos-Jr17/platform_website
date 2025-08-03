'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Car, Handshake, Heart, Home as HomeIcon, User } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Nossos Serviços</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções completas para proteger você, sua família e seu negócio
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Seguro de Vida</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Proteção financeira para seus entes queridos e cobertura para imprevistos</p>
            <Link href="/servicos/seguro-vida" className="text-[var(--primary)] font-medium hover:underline flex items-center">
              Saiba mais <span className="ml-1">&rarr;</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Car size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Seguro Automóvel</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Cobertura completa para veículos particulares ou comerciais com assistência 24h</p>
            <Link href="/servicos/seguro-automovel" className="text-[var(--primary)] font-medium hover:underline flex items-center">
              Saiba mais <span className="ml-1">&rarr;</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Seguro de Saúde</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Planos de saúde personalizados para você e sua família com ampla rede credenciada</p>
            <Link href="/servicos/seguro-saude" className="text-[var(--primary)] font-medium hover:underline flex items-center">
              Saiba mais <span className="ml-1">&rarr;</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <HomeIcon size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Seguro de Imóvel</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Proteção para residências e propriedades comerciais contra riscos imprevistos</p>
            <Link href="/servicos/seguro-imovel" className="text-[var(--primary)] font-medium hover:underline flex items-center">
              Saiba mais <span className="ml-1">&rarr;</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <User size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Acidentes Pessoais</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Cobertura para acidentes inesperados que podem ocorrer a qualquer momento</p>
            <Link href="/servicos/acidentes-pessoais" className="text-[var(--primary)] font-medium hover:underline flex items-center">
              Saiba mais <span className="ml-1">&rarr;</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Handshake size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Responsabilidade Civil</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Proteção contra possíveis reivindicações em sua atividade profissional</p>
            <Link href="/servicos/responsabilidade-civil" className="text-[var(--primary)] font-medium hover:underline flex items-center">
              Saiba mais <span className="ml-1">&rarr;</span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/servicos" className="inline-block bg-[var(--primary)] py-3 px-8 rounded-full hover:bg-blue-800 transition-colors text-white font-bold">
            Ver Todos os Serviços
          </Link>
        </motion.div>
      </div>
    </section>
  );
}