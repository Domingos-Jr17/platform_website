'use client';

import { useState } from 'react';
import { HelpCircle, FileText, Headphones, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuportePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Como faço para acionar um seguro?',
      answer: 'Para acionar seu seguro, entre em contato conosco através do telefone +258 87 797 0000 ou pelo e-mail comercial@platformseguros.com. Nossa equipe irá orientá-lo sobre os documentos necessários e os próximos passos.'
    },
    {
      question: 'Quais documentos são necessários para acionar um sinistro?',
      answer: 'Os documentos variam conforme o tipo de seguro, mas geralmente incluem: cópia do documento de identidade, comprovante de residência, formulário de aviso de sinistro devidamente preenchido e documentos específicos para cada tipo de ocorrência.'
    },
    {
      question: 'Quanto tempo leva para o processo de sinistro ser concluído?',
      answer: 'O prazo varia conforme a complexidade do caso e a documentação apresentada. Em média, processos simples são concluídos em até 30 dias, enquanto casos mais complexos podem levar até 90 dias.'
    },
    {
      question: 'Posso acompanhar o status do meu sinistro?',
      answer: 'Sim, oferecemos acompanhamento em tempo real do status do seu sinistro. Entre em contato com nossa equipe para obter atualizações sobre o andamento do processo.'
    },
    {
      question: 'Como escolher o seguro ideal para minhas necessidades?',
      answer: 'Nossa equipe de especialistas está à disposição para analisar suas necessidades e recomendar o seguro mais adequado. Agende uma consulta através do nosso site ou entre em contato conosco.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Suporte ao Cliente
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Estamos aqui para ajudar você em todas as etapas, desde a escolha do seguro até o acompanhamento de sinistros
          </motion.p>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={{color: '#003366'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Canais de Atendimento
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon-bg mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Atendimento Telefônico</h3>
              <p className="text-gray-600 mb-4">Fale diretamente com nossos especialistas</p>
              <a href="tel:+258877970000" className="text-[var(--primary)] font-medium hover:underline">+258 87 797 0000</a>
              <p className="text-sm text-gray-500 mt-2">Segunda a Sexta: 8h-18h</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon-bg mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Envie suas dúvidas e solicitações</p>
              <a href="mailto:comercial@platformseguros.com" className="text-[var(--primary)] font-medium hover:underline">comercial@platformseguros.com</a>
              <p className="text-sm text-gray-500 mt-2">Resposta em até 24h</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon-bg mx-auto mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Chat Online</h3>
              <p className="text-gray-600 mb-4">Converse com um atendente em tempo real</p>
              <button className="text-[var(--primary)] font-medium hover:underline">Iniciar Chat</button>
              <p className="text-sm text-gray-500 mt-2">Disponível durante o horário comercial</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acompanhamento de Sinistros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{color: '#003366'}}>Acompanhamento de Sinistros</h2>
              <p className="text-gray-600 mb-4">
                Oferecemos suporte contínuo, auxiliando os clientes a navegar pelo processo de reclamação e garantindo que recebem o que lhes é devido.
              </p>
              <p className="text-gray-600 mb-4">
                Nossa equipe especializada está preparada para orientar em todas as etapas, desde a notificação do sinistro até a conclusão do processo.
              </p>
              <p className="text-gray-600 mb-6">
                Para acompanhar seu sinistro, entre em contato conosco através de nossos canais de atendimento e informe seu número de protocolo.
              </p>
              <motion.a 
                href="/contato" 
                className="btn-primary inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Acompanhar Sinistro
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4" style={{color: '#003366'}}>Etapas do Processo de Sinistro</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-[var(--primary)] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Notificação do Sinistro</h4>
                    <p className="text-gray-600 text-sm">Comunique o sinistro o mais rápido possível através de nossos canais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-[var(--primary)] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Documentação</h4>
                    <p className="text-gray-600 text-sm">Apresente os documentos necessários para análise do sinistro</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-[var(--primary)] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Análise e Vistoria</h4>
                    <p className="text-gray-600 text-sm">Nossa equipe e a seguradora analisarão o caso e realizarão vistorias se necessário</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-[var(--primary)] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Conclusão e Pagamento</h4>
                    <p className="text-gray-600 text-sm">Após aprovação, o pagamento será realizado conforme as condições do contrato</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{color: '#003366'}}>Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre seguros e nossos serviços
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-bold flex items-center">
                      <HelpCircle className="text-[var(--primary)] mr-3" />
                      {faq.question}
                    </h3>
                    <motion.div 
                      className="text-gray-400"
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
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
                  {activeFaq === index && (
                    <motion.div 
                      className="px-6 pb-6 pt-2 border-t border-gray-100"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 mb-4">Não encontrou o que procura?</p>
            <motion.a 
              href="/contato" 
              className="bg-[var(--primary)] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Recursos Úteis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={{color: '#003366'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recursos Úteis
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon-bg mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Formulários</h3>
              <p className="text-gray-600 mb-4">Acesse formulários para aviso de sinistro, alteração de dados e outras solicitações</p>
              <a href="/recursos/formularios" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Acessar Formulários <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon-bg mb-4">
                <Headphones size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Tutoriais</h3>
              <p className="text-gray-600 mb-4">Vídeos e guias passo a passo para ajudar você a utilizar nossos serviços</p>
              <a href="/recursos/tutoriais" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Ver Tutoriais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon-bg mb-4">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Glossário</h3>
              <p className="text-gray-600 mb-4">Entenda os termos técnicos mais comuns do universo dos seguros</p>
              <a href="/recursos/glossario" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Consultar Glossário <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}