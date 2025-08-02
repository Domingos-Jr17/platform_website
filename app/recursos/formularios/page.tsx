'use client';

import { motion } from 'framer-motion';

export default function FormulariosPage() {
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
            Formulários Úteis
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Acesse e baixe os formulários necessários para suas solicitações
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#003366'}}>Lista de Formulários</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">Aviso de Sinistro</h3>
              <a href="/docs/formularios/aviso-sinistro.pdf" className="text-[var(--primary)] font-medium hover:underline">Baixar Formulário (PDF)</a>
              {/* TODO: Substituir pelo link real do PDF do formulário de Aviso de Sinistro */}
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Alteração de Dados Cadastrais</h3>
              <a href="/docs/formularios/alteracao-dados.pdf" className="text-[var(--primary)] font-medium hover:underline">Baixar Formulário (PDF)</a>
              {/* TODO: Substituir pelo link real do PDF do formulário de Alteração de Dados Cadastrais */}
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Solicitação de 2ª Via de Apólice</h3>
              <a href="/docs/formularios/segunda-via-apolice.pdf" className="text-[var(--primary)] font-medium hover:underline">Baixar Formulário (PDF)</a>
              {/* TODO: Substituir pelo link real do PDF do formulário de Solicitação de 2ª Via de Apólice */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}