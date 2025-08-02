/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import Image from 'next/image';
import { Shield, Heart, Car, Home as HomeIcon, User, Handshake, Quote, Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import PartnerLogos from './components/PartnerLogos';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 text-white" style={{backgroundColor: '#003366'}}>
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="absolute inset-0 z-0">
          <Image 
            src="/insurance-hero.jpg" 
            alt="Proteção e inovação em seguros" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-30"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proteção e Inovação em Seguros para Moçambique
            </h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Soluções personalizadas em Vida, Não Vida e Serviços Adicionais com a qualidade e confiança que você merece
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/contato#orcamento"
                className="btn-primary shadow-lg py-3 px-8 font-bold text-white hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicite uma Cotação
              </motion.a>
              <motion.a
                href="/contato"
                className="btn-secondary py-3 px-8 font-bold text-white hover:bg-white hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale com um Especialista
              </motion.a>
            </div>
          </motion.div>
          
          {/* Selos de Confiança */}
          <motion.div 
            className="mt-16 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="bg-white text-[var(--primary)] rounded-full p-3 mb-2">
                <Check size={24} />
              </div>
              <span className="text-sm">Certificado</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-[var(--primary)] rounded-full p-3 mb-2">
                <Shield size={24} />
              </div>
              <span className="text-sm">Seguro</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-[var(--primary)] rounded-full p-3 mb-2">
                <Star size={24} />
              </div>
              <span className="text-sm">5 Estrelas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destaques Rápidos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{color: '#003366'}}>Nossa Identidade</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossos pilares que fundamentam nossa atuação no mercado moçambicano
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon-bg mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#003366'}}>Missão</h3>
              <p className="text-gray-600 mb-4">Proporcionar serviços de mediação de seguros com qualidade, ética e excelência</p>
              <p className="text-sm text-gray-500">Contribuindo para o sucesso e proteção dos nossos clientes</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon-bg mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#003366'}}>Visão</h3>
              <p className="text-gray-600 mb-4">Ser referência no mercado moçambicano como uma empresa comprometida</p>
              <p className="text-sm text-gray-500">Com inovação, satisfação do cliente e desenvolvimento sustentável</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon-bg mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#003366'}}>Valores</h3>
              <p className="text-gray-600 mb-4">Compromisso, Proteção e Responsabilidade Social</p>
              <p className="text-sm text-gray-500">Servindo e acompanhando pessoas com ética e qualidade</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções completas para proteger você, sua família e seu negócio
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-blue-100 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Seguro de Vida</h4>
              <p className="text-gray-600 mb-4">Proteção financeira para seus entes queridos e cobertura para imprevistos</p>
              <a href="/servicos/seguro-vida" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Saiba mais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-100 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Car size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Seguro Automóvel</h4>
              <p className="text-gray-600 mb-4">Cobertura completa para veículos particulares ou comerciais com assistência 24h</p>
              <a href="/servicos/seguro-automovel" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Saiba mais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-blue-100 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Seguro de Saúde</h4>
              <p className="text-gray-600 mb-4">Planos de saúde personalizados para você e sua família com ampla rede credenciada</p>
              <a href="/servicos/seguro-saude" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Saiba mais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-blue-100 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <HomeIcon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Seguro de Imóvel</h4>
              <p className="text-gray-600 mb-4">Proteção para residências e propriedades comerciais contra riscos imprevistos</p>
              <a href="/servicos/seguro-imovel" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Saiba mais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-blue-100 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <User size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Acidentes Pessoais</h4>
              <p className="text-gray-600 mb-4">Cobertura para acidentes inesperados que podem ocorrer a qualquer momento</p>
              <a href="/servicos/acidentes-pessoais" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Saiba mais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-blue-100 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Handshake size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Responsabilidade Civil</h4>
              <p className="text-gray-600 mb-4">Proteção contra possíveis reivindicações em sua atividade profissional</p>
              <a href="/servicos/responsabilidade-civil" className="text-[var(--primary)] font-medium hover:underline flex items-center">
                Saiba mais <span className="ml-1">&rarr;</span>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <a href="/servicos" className="inline-block bg-[var(--primary)] py-3 px-8 rounded-full hover:bg-blue-800 transition-colors text-white font-bold">
              Ver Todos os Serviços
            </a>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{color: '#003366'}}>O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A satisfação de nossos clientes é nosso maior compromisso
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
              <p className="text-gray-600 mb-4 italic">
                &quot;A Platform Seguros transformou minha experiência com seguros. Atendimento rápido e soluções que realmente atendem às minhas necessidades.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full w-10 h-10 mr-3"></div>
                <div>
                  <h4 className="font-bold">Carlos M.</h4>
                  <p className="text-sm text-gray-500">Cliente desde 2020</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
              <p className="text-gray-600 mb-4 italic">
                &quot;Como empresário, preciso de segurança e confiança. A Platform oferece isso com um serviço personalizado e eficiente.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full w-10 h-10 mr-3"></div>
                <div>
                  <h4 className="font-bold">Ana L.</h4>
                  <p className="text-sm text-gray-500">Cliente desde 2019</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
              <p className="text-gray-600 mb-4 italic">
                &quot;O suporte durante o processo de sinistro foi excepcional. Sentimos que realmente tínhamos alguém do nosso lado.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full w-10 h-10 mr-3"></div>
                <div>
                  <h4 className="font-bold">Jorge S.</h4>
                  <p className="text-sm text-gray-500">Cliente desde 2021</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16" style={{backgroundColor: '#003366'}}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Clientes Atendidos</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfação</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Suporte Disponível</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner de Parceiros */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Nossos Parceiros</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
                      <PartnerLogos />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proteja o que mais importa
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Entre em contato hoje mesmo e descubra as melhores soluções de seguros para você e sua família
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/contato#orcamento"
              className="btn-primary text-white font-bold py-3 px-8 hover:bg-red-700 transition-colors"
            >
              Solicite uma Cotação
            </a>
            <a
              href="/contato"
              className="btn-secondary text-white font-bold py-3 px-8 hover:bg-white hover:text-[var(--primary)] transition-colors"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
