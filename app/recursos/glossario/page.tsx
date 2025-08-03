'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import PageHeader from '../../components/ui/PageHeader';

export default function GlossarioPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  const terms = [
    {
      term: 'Apólice',
      definition: 'Documento que formaliza o contrato de seguro, detalhando as coberturas, condições e direitos e deveres do segurado e da seguradora.',
    },
    {
      term: 'Beneficiário',
      definition: 'Pessoa física ou jurídica indicada pelo segurado para receber a indenização em caso de sinistro.',
    },
    {
      term: 'Cobertura',
      definition: 'Conjunto de riscos que estão garantidos pelo seguro, ou seja, as situações em que a seguradora indenizará o segurado ou beneficiário.',
    },
    {
      term: 'Franquia',
      definition: 'Valor fixo ou percentual que o segurado deve arcar em caso de sinistro, antes que a seguradora comece a pagar a indenização.',
    },
    {
      term: 'Indenização',
      definition: 'Valor pago pela seguradora ao segurado ou beneficiário em caso de sinistro coberto pela apólice.',
    },
    {
      term: 'Prêmio',
      definition: 'Valor que o segurado paga à seguradora para ter direito à cobertura do seguro.',
    },
    {
      term: 'Sinistro',
      definition: 'Ocorrência do evento previsto e coberto no contrato de seguro, que gera o direito à indenização.',
    },
  ];

  const filteredTerms = terms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTerm = (term: string) => {
    setActiveTerm(activeTerm === term ? null : term);
  };

  return (
    <div className="pt-24">
      <PageHeader 
        title="Glossário de Seguros"
        subtitle="Entenda os termos técnicos mais comuns do universo dos seguros"
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Buscar termo..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] mb-8 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredTerms.length === 0 ? (
              <p className="text-center text-gray-600 dark:text-gray-300">Nenhum termo encontrado.</p>
            ) : (
              <div className="space-y-4">
                {filteredTerms.map((item, index) => (
                  <motion.div 
                    key={item.term}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div 
                      className="p-5 cursor-pointer flex items-center justify-between"
                      onClick={() => toggleTerm(item.term)}
                    >
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.term}</h3>
                      <motion.div 
                        className="text-gray-400 dark:text-gray-500"
                        animate={{ rotate: activeTerm === item.term ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </motion.div>
                    </div>
                    {activeTerm === item.term && (
                      <motion.div 
                        className="px-5 pb-5 pt-0 border-t border-gray-100 dark:border-gray-700"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 dark:text-gray-300">{item.definition}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}