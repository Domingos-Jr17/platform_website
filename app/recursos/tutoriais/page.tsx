'use client';

import { motion } from 'framer-motion';

import PageHeader from '../../components/ui/PageHeader';

export default function TutoriaisPage() {
  return (
    <div className="pt-24">
      <PageHeader 
        title="Tutoriais e Guias"
        subtitle="Aprenda a utilizar nossos serviços com vídeos e guias passo a passo"
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">Nossos Tutoriais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">Como Acionar seu Seguro</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Guia completo sobre o processo de acionamento de sinistros.</p>
              <a href="/tutoriais/como-acionar-seguro" className="text-[var(--primary)] font-medium hover:underline">Assistir Tutorial</a>
              {/* NOTE: O link real do tutorial precisa ser fornecido pelo desenvolvedor. */}
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Entendendo sua Apólice</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Desvende os termos e condições da sua apólice de seguro.</p>
              <a href="/tutoriais/entendendo-apolice" className="text-[var(--primary)] font-medium hover:underline">Ler Guia</a>
              {/* NOTE: O link real do guia precisa ser fornecido pelo desenvolvedor. */}
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Dicas de Segurança</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Conselhos práticos para proteger você, sua família e seu patrimônio.</p>
              <a href="/tutoriais/dicas-seguranca" className="text-[var(--primary)] font-medium hover:underline">Ver Dicas</a>
              {/* NOTE: O link real das dicas precisa ser fornecido pelo desenvolvedor. */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}