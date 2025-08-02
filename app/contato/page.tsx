'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
    // TODO: Implementar lógica de envio real para um backend/API ou serviço de e-mail.
    // Ex: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    // TODO: Adicionar validação mais robusta e feedback visual ao usuário (ex: spinner, mensagem de sucesso/erro).
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
    // TODO: Implementar lógica de envio real para um backend/API ou serviço de e-mail.
    // Ex: fetch('/api/quote', { method: 'POST', body: JSON.stringify(quoteData) });
    // TODO: Adicionar validação mais robusta e feedback visual ao usuário (ex: spinner, mensagem de sucesso/erro).
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
      {/* Hero Section */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Entre em Contato
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Estamos à disposição para atender às suas necessidades e esclarecer dúvidas sobre nossos serviços
          </motion.p>
        </div>
      </section>

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
              <h2 className="text-3xl font-bold mb-6" style={{color: '#003366'}}>Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Assunto</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="cotacao">Solicitar Cotação</option>
                    <option value="duvida">Dúvida sobre Seguros</option>
                    <option value="sinistro">Acompanhamento de Sinistro</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
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
              <h2 className="text-3xl font-bold mb-6" style={{color: '#003366'}}>Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="icon-bg mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Endereço</h3>
                    <p className="text-gray-600">Av. Vladimir Lenine N. 174, Edifício Millenium Park, 1ºAndar Esq. 1100</p>
                    <p className="text-gray-600">Maputo - Moçambique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-bg mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefone</h3>
                    <p className="text-gray-600">+258 87 797 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-bg mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600">comercial@platformseguros.com</p>
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Nossa Localização</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
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
      <section id="orcamento" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6" style={{color: '#003366'}}>Solicite uma Cotação</h2>
            <p className="text-center text-gray-600 mb-8">
              Preencha o formulário abaixo e entraremos em contato com a melhor proposta para suas necessidades
            </p>
            
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-name" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="quote-name" 
                    name="name"
                    value={quoteData.name}
                    onChange={handleQuoteChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="quote-email" 
                    name="email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="quote-phone" 
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleQuoteChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="quote-company" className="block text-gray-700 font-medium mb-2">Empresa (opcional)</label>
                  <input 
                    type="text" 
                    id="quote-company" 
                    name="company"
                    value={quoteData.company}
                    onChange={handleQuoteChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="quote-service" className="block text-gray-700 font-medium mb-2">Tipo de Seguro</label>
                <select 
                  id="quote-service" 
                  name="service"
                  value={quoteData.service}
                  onChange={handleQuoteChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                  required
                >
                  <option value="">Selecione o tipo de seguro</option>
                  <option value="vida">Seguro de Vida</option>
                  <option value="automovel">Seguro Automóvel</option>
                  <option value="saude">Seguro de Saúde</option>
                  <option value="imovel">Seguro de Imóvel</option>
                  <option value="acidentes">Acidentes Pessoais</option>
                  <option value="responsabilidade">Responsabilidade Civil</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="quote-message" className="block text-gray-700 font-medium mb-2">Detalhes Adicionais</label>
                <textarea 
                  id="quote-message" 
                  name="message"
                  value={quoteData.message}
                  onChange={handleQuoteChange}
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button 
                  type="submit" 
                  className="btn-primary p-4 px-50 "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Cotação
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}