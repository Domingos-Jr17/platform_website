'use client';

import Image from 'next/image';
import { Shield, Star, Heart, Award, History } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/app/components/ui/PageHeader';

export default function AboutPage() {
  return (
    <div className="pt-24">
      <PageHeader
        title="Sobre a Platform"
        subtitle="Conheça nossa história, missão, visão e valores que nos tornam referência no mercado moçambicano"
      />

      {/* Quem Somos */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Quem Somos</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Somos uma Corretora de Seguros especializada em oferecer soluções nos ramos Vida e Não Vida. Atuamos com autonomia e flexibilidade, contando com uma equipa com vasta experiência no setor segurador.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nosso objetivo é facilitar e intermediar a relação entre o segurado e a seguradora, orientando e esclarecendo direitos e obrigações em todos os contratos de seguro.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Temos uma equipa técnica qualificada, comprometida com a excelência e a satisfação dos nossos clientes.
              </p>
            </motion.div>
            <motion.div 
              className="relative rounded-xl h-80 overflow-hidden bg-gray-200 dark:bg-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image 
                src="https://placehold.co/600x400/334155/FFFFFF?text=Nossa+Equipe"
                alt="Imagem da equipe ou escritório"
                layout="fill"
                objectFit="cover"
              />
              {/* NOTE: Substituir por imagem real da equipe ou escritório */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Nossa Identidade</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Os pilares que fundamentam nossa atuação no mercado moçambicano
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">Missão</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Proporcionar serviços de mediação de seguros com qualidade, ética e excelência</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Contribuindo para o sucesso e proteção dos nossos clientes</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">Visão</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ser referência no mercado moçambicano como uma empresa comprometida</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Com inovação, satisfação do cliente e desenvolvimento sustentável</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">Valores</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Compromisso, Proteção e Responsabilidade Social</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Servindo e acompanhando pessoas com ética e qualidade</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[var(--primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossa História
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-700"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:w-1/2 md:pr-8 text-right">
                    <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] inline-block px-4 py-2 rounded-full mb-2">
                      <History className="inline mr-2" size={16} /> 2008
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Fundação da Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Início das operações como corretora de seguros em Maputo, com foco em atendimento personalizado.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 border-4 border-[var(--primary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto md:mx-0">
                      <Shield className="text-[var(--primary)]" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="md:w-1/2 md:pr-8 md:order-2">
                    <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] inline-block px-4 py-2 rounded-full mb-2">
                      <History className="inline mr-2" size={16} /> 2015
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Expansão de Serviços</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ampliação da carteira de produtos, incluindo seguros de vida e saúde para pessoas físicas e jurídicas.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:order-1 mt-4 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 border-4 border-[var(--primary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto md:mx-0 md:ml-auto">
                      <Star className="text-[var(--primary)]" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="md:w-1/2 md:pr-8 text-right">
                    <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] inline-block px-4 py-2 rounded-full mb-2">
                      <History className="inline mr-2" size={16} /> 2020
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Transformação Digital</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Investimento em tecnologia para melhorar a experiência do cliente e agilizar processos.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 border-4 border-[var(--primary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto md:mx-0">
                      <Heart className="text-[var(--primary)]" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="md:w-1/2 md:pr-8 md:order-2">
                    <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] inline-block px-4 py-2 rounded-full mb-2">
                      <History className="inline mr-2" size={16} /> Hoje
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Referência no Mercado</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Reconhecida como uma das principais corretoras de Moçambique, com mais de 5000 clientes atendidos.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:order-1 mt-4 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 border-4 border-[var(--primary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto md:mx-0 md:ml-auto">
                      <Award className="text-[var(--primary)]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          </div>
        </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Nossa Equipe</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Profissionais qualificados e comprometidos com a excelência no atendimento
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative bg-gray-200 dark:bg-gray-600 h-48 flex items-center justify-center">
                  <Image 
                    src={`https://placehold.co/300x200/475569/FFFFFF?text=Profissional+${item}`}
                    alt={`Foto do profissional ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* NOTE: Substituir por foto real do profissional */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">Nome do Profissional</h3>
                  <p className="text-[var(--primary)] mb-3">Cargo</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Breve descrição sobre a experiência e especialização do profissional.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200 dark:text-blue-300">Clientes Atendidos</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200 dark:text-blue-300">Anos de Experiência</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200 dark:text-blue-300">Satisfação</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200 dark:text-blue-300">Suporte Disponível</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
