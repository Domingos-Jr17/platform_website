'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '../components/ui/PageHeader';
import CtaSection from '../components/sections/CtaSection';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário de Contato Enviado:', formData);
    // NOTE: A lógica de envio real para um backend/API ou serviço de e-mail, e a validação/feedback visual, precisam ser implementadas pelo desenvolvedor.
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário de cotação
    console.log('Solicitação de Cotação Enviada:', quoteData);
    // NOTE: A lógica de envio real para um backend/API ou serviço de e-mail, e a validação/feedback visual, precisam ser implementadas pelo desenvolvedor.
    alert('Solicitação de cotação enviada com sucesso! Entraremos em contato em breve.');
    setQuoteData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="pt-24">
      <PageHeader 
        title="Entre em Contato"
        subtitle="Estamos à disposição para atender às suas necessidades e esclarecer dúvidas sobre nossos serviços"
      />

      {/* Formulário e Informações */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Assunto</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="cotacao">Solicitar Cotação</option>
                    <option value="duvida">Dúvida sobre Seguros</option>
                    <option value="sinistro">Acompanhamento de Sinistro</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" 
                    required
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn-primary w-full p-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
            
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="icon-bg mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Endereço</h3>
                    <p className="text-gray-600 dark:text-gray-300">Av. Vladimir Lenine N. 174, Edifício Millenium Park, 1ºAndar Esq. 1100</p>
                    <p className="text-gray-600 dark:text-gray-300">Maputo - Moçambique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-bg mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+258 87 797 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-bg mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600 dark:text-gray-300">comercial@platformseguros.com</p>
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Nossa Localização</h3>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.6000000000004!2d32.5731!3d-25.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzAwLjAiUyAzMsKwMzQnMjMuMCJF!5e0!3m2!1sen!2smz!4v1678912345678!5m2!1sen!2smz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Orçamento */}
      <CtaSection 
        title="Solicite uma Cotação"
        subtitle="Preencha o formulário abaixo e entraremos em contato com a melhor proposta para suas necessidades"
        buttonText="Solicitar Cotação"
        buttonLink="/contato#orcamento"
        variant="light"
      />
    </div>
  );
}