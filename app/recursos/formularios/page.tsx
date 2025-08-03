'use client';

import { motion } from 'framer-motion';

import PageHeader from '../../components/ui/PageHeader';

export default function FormulariosPage() {
  return (
    <div className="pt-24">
      <PageHeader 
        title="Formulários Úteis"
        subtitle="Acesse e baixe os formulários necessários para suas solicitações"
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">Lista de Formulários</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">Aviso de Sinistro</h3>
              <a href="/docs/formularios/aviso-sinistro.pdf" className="text-[var(--primary)] font-medium hover:underline">Baixar Formulário (PDF)</a>
              {/* NOTE: O link real do PDF do formulário de Aviso de Sinistro precisa ser fornecido pelo desenvolvedor. */}
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Alteração de Dados Cadastrais</h3>
              <a href="/docs/formularios/alteracao-dados.pdf" className="text-[var(--primary)] font-medium hover:underline">Baixar Formulário (PDF)</a>
              {/* NOTE: O link real do PDF do formulário de Alteração de Dados Cadastrais precisa ser fornecido pelo desenvolvedor. */}
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Solicitação de 2ª Via de Apólice</h3>
              <a href="/docs/formularios/segunda-via-apolice.pdf" className="text-[var(--primary)] font-medium hover:underline">Baixar Formulário (PDF)</a>
              {/* NOTE: O link real do PDF do formulário de Solicitação de 2ª Via de Apólice precisa ser fornecido pelo desenvolvedor. */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}