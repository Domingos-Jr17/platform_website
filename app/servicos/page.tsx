'use client';

import { Heart, Car, Home, User, Handshake, Plane, Users, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import PageHeader from '../components/ui/PageHeader';
import CtaSection from '../components/sections/CtaSection';

export default function ServicosPage() {
  const services = [
    {
      id: 'vida',
      title: 'Seguro de Vida',
      description: 'Proteção financeira para seus entes queridos e cobertura para imprevistos.',
      icon: <Heart size={24} />,
      link: '/servicos/seguro-vida'
    },
    {
      id: 'automovel',
      title: 'Seguro Automóvel',
      description: 'Cobertura completa para veículos particulares ou comerciais com assistência 24h.',
      icon: <Car size={24} />,
      link: '/servicos/seguro-automovel'
    },
    {
      id: 'saude',
      title: 'Seguro de Saúde',
      description: 'Planos de saúde personalizados para você e sua família com ampla rede credenciada.',
      icon: <Stethoscope size={24} />,
      link: '/servicos/seguro-saude'
    },
    {
      id: 'imovel',
      title: 'Seguro de Imóvel',
      description: 'Proteção para residências e propriedades comerciais contra riscos imprevistos.',
      icon: <Home size={24} />,
      link: '/servicos/seguro-imovel'
    },
    {
      id: 'acidentes',
      title: 'Acidentes Pessoais',
      description: 'Cobertura para acidentes inesperados que podem ocorrer a qualquer momento.',
      icon: <User size={24} />,
      link: '/servicos/acidentes-pessoais'
    },
    {
      id: 'responsabilidade',
      title: 'Responsabilidade Civil',
      description: 'Proteção contra possíveis reivindicações em sua atividade profissional.',
      icon: <Handshake size={24} />,
      link: '/servicos/responsabilidade-civil'
    },
    {
      id: 'viagem',
      title: 'Seguro de Viagem',
      description: 'Viaje com confiança, sabendo que está coberto em suas aventuras pelo mundo.',
      icon: <Plane size={24} />,
      link: '/servicos/seguro-viagem'
    },
    {
      id: 'familia',
      title: 'Seguro Família',
      description: 'Crie um pacote de seguros personalizado para atender às necessidades de sua família.',
      icon: <Users size={24} />,
      link: '/servicos/seguro-familia'
    }
  ];

  return (
    <div className="pt-24">
      <PageHeader 
        title="Nossos Serviços"
        subtitle="Soluções completas para proteger você, sua família e seu negócio"
      />

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[var(--icon-bg-color)] text-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <Link href={service.link} className="text-[var(--primary)] font-medium hover:underline flex items-center">
                  Saiba mais <span className="ml-1">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Adicionais */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Serviços Adicionais</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Além dos nossos seguros, oferecemos suporte especializado para garantir a melhor experiência
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)] dark:text-blue-300">Suporte em Sinistros</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Oferecemos suporte contínuo, auxiliando os clientes a navegar pelo processo de reclamação e garantindo que recebem o que lhes é devido.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa equipe está disponível para acompanhar cada etapa, desde a notificação do sinistro até a conclusão do processo.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)] dark:text-blue-300">Educação em Seguros</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Além da mediação de seguros, educamos os clientes sobre a importância do seguro e as coberturas necessárias para uma proteção adequada.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Acreditamos que clientes bem informados tomam decisões melhores e se sentem mais seguros.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)] dark:text-blue-300">Gestão com Seguradoras</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Atuamos como intermediária, gerindo a comunicação entre clientes e seguradoras, o que facilita a resolução de dúvidas e problemas.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa experiência no setor nos permite negociar as melhores condições para nossos clientes.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)] dark:text-blue-300">Consultoria Personalizada</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Oferecemos consultoria personalizada para identificar as necessidades específicas de cada cliente e recomendar as melhores soluções.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Cada cliente é único, e nosso atendimento reflete essa individualidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Encontre o Seguro Ideal para Você"
        subtitle="Nossos especialistas estão prontos para ajudá-lo a encontrar a melhor cobertura para suas necessidades"
        buttonText="Solicite uma Cotação"
        buttonLink="/contato#orcamento"
        variant="primary"
      />
    </div>
  );
}