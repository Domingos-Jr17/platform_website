'use client';

import { motion } from 'framer-motion';

export default function TutoriaisPage() {
  return (
    <div className="pt-24">
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tutoriais e Guias
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Aprenda a utilizar nossos serviços com vídeos e guias passo a passo
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#003366'}}>Nossos Tutoriais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">Como Acionar seu Seguro</h3>
              <p className="text-gray-600 mb-4">Guia completo sobre o processo de acionamento de sinistros.</p>
              <a href="/tutoriais/como-acionar-seguro" className="text-[var(--primary)] font-medium hover:underline">Assistir Tutorial</a>
              {/* TODO: Substituir pelo link real do tutorial */}
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Entendendo sua Apólice</h3>
              <p className="text-gray-600 mb-4">Desvende os termos e condições da sua apólice de seguro.</p>
              <a href="/tutoriais/entendendo-apolice" className="text-[var(--primary)] font-medium hover:underline">Ler Guia</a>
              {/* TODO: Substituir pelo link real do guia */}
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Dicas de Segurança</h3>
              <p className="text-gray-600 mb-4">Conselhos práticos para proteger você, sua família e seu patrimônio.</p>
              <a href="/tutoriais/dicas-seguranca" className="text-[var(--primary)] font-medium hover:underline">Ver Dicas</a>
              {/* TODO: Substituir pelo link real das dicas */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}