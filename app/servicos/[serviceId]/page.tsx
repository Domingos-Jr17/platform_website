'use client';

import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/app/components/ui/PageHeader';
import CtaSection from '@/app/components/sections/CtaSection';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  howToContract: string[];
  faq: { question: string; answer: string }[];
}

const serviceData: { [key: string]: ServiceDetail } = {
  'seguro-vida': {
    title: 'Seguro de Vida',
    description: 'Proteção financeira para seus entes queridos e cobertura para imprevistos.',
    fullDescription: 'O seguro de vida garante a segurança financeira da sua família em momentos difíceis, oferecendo suporte em caso de falecimento, invalidez ou doenças graves. Personalize sua cobertura para atender às suas necessidades específicas.',
    benefits: [
      'Segurança financeira para a família',
      'Cobertura em caso de invalidez',
      'Auxílio para doenças graves',
      'Planejamento sucessório',
    ],
    howToContract: [
      'Entre em contato com um de nossos especialistas.',
      'Apresente seus documentos e informações financeiras.',
      'Escolha a cobertura ideal para você e sua família.',
      'Assine o contrato e garanta sua proteção.',
    ],
    faq: [
      { question: 'Quem pode ser beneficiário?', answer: 'Qualquer pessoa indicada por você pode ser beneficiária.' },
      { question: 'Posso mudar a cobertura?', answer: 'Sim, a cobertura pode ser ajustada conforme suas necessidades.' },
    ],
  },
  'seguro-automovel': {
    title: 'Seguro Automóvel',
    description: 'Cobertura completa para veículos particulares ou comerciais com assistência 24h.',
    fullDescription: 'Proteja seu veículo contra roubo, furto, colisão, incêndio e danos a terceiros. Conte com assistência 24 horas para emergências, guincho, chaveiro e muito mais.',
    benefits: [
      'Cobertura contra roubo e furto',
      'Proteção contra colisão e incêndio',
      'Assistência 24 horas',
      'Cobertura para danos a terceiros',
    ],
    howToContract: [
      'Informe os dados do seu veículo.',
      'Escolha o tipo de cobertura e adicionais.',
      'Receba sua cotação personalizada.',
      'Contrate online ou com um consultor.',
    ],
    faq: [
      { question: 'Cobre acidentes com terceiros?', answer: 'Sim, a cobertura de Responsabilidade Civil cobre danos a terceiros.' },
      { question: 'Posso ter carro reserva?', answer: 'Depende da cobertura contratada, mas é uma opção disponível.' },
    ],
  },
  'seguro-saude': {
    title: 'Seguro de Saúde',
    description: 'Planos de saúde personalizados para você e sua família com ampla rede credenciada.',
    fullDescription: 'Tenha acesso a uma ampla rede de hospitais, clínicas e laboratórios. Escolha o plano que melhor se adapta às suas necessidades e garanta atendimento médico de qualidade para você e sua família.',
    benefits: [
      'Ampla rede credenciada',
      'Atendimento de urgência e emergência',
      'Consultas e exames',
      'Internações e cirurgias',
    ],
    howToContract: [
      'Defina suas necessidades de cobertura.',
      'Escolha entre os planos disponíveis.',
      'Preencha o formulário de adesão.',
      'Comece a usar seu seguro saúde.',
    ],
    faq: [
      { question: 'Cobre doenças preexistentes?', answer: 'Geralmente há um período de carência para doenças preexistentes.' },
      { question: 'Posso incluir dependentes?', answer: 'Sim, você pode incluir seus dependentes no plano.' },
    ],
  },
  'seguro-imovel': {
    title: 'Seguro de Imóvel',
    description: 'Proteção para residências e propriedades comerciais contra riscos imprevistos.',
    fullDescription: 'Proteja seu lar ou seu negócio contra incêndio, roubo, danos elétricos, vendaval e muito mais. Tenha tranquilidade sabendo que seu patrimônio está seguro.',
    benefits: [
      'Cobertura contra incêndio e roubo',
      'Danos elétricos e vendaval',
      'Assistência 24 horas para emergências',
      'Proteção para imóveis residenciais e comerciais',
    ],
    howToContract: [
      'Informe os dados do seu imóvel.',
      'Escolha as coberturas desejadas.',
      'Receba sua cotação.',
      'Contrate e proteja seu patrimônio.',
    ],
    faq: [
      { question: 'Cobre desastres naturais?', answer: 'Sim, dependendo da cobertura contratada, pode cobrir desastres naturais.' },
      { question: 'Posso segurar um imóvel alugado?', answer: 'Sim, é possível segurar imóveis alugados.' },
    ],
  },
  'acidentes-pessoais': {
    title: 'Acidentes Pessoais',
    description: 'Cobertura para acidentes inesperados que podem ocorrer a qualquer momento.',
    fullDescription: 'Garanta indenização em caso de acidentes que resultem em invalidez permanente ou morte. Uma proteção essencial para você e sua família, complementando outros seguros.',
    benefits: [
      'Indenização por invalidez permanente',
      'Cobertura em caso de morte acidental',
      'Auxílio funeral',
      'Proteção 24 horas por dia',
    ],
    howToContract: [
      'Defina o valor da indenização.',
      'Escolha as coberturas adicionais.',
      'Preencha a proposta.',
      'Comece a se proteger.',
    ],
    faq: [
      { question: 'Cobre acidentes de trabalho?', answer: 'Geralmente sim, mas verifique as condições específicas da apólice.' },
      { question: 'É um seguro obrigatório?', answer: 'Não é obrigatório, mas é altamente recomendado.' },
    ],
  },
  'responsabilidade-civil': {
    title: 'Responsabilidade Civil',
    description: 'Proteção contra possíveis reivindicações em sua atividade profissional.',
    fullDescription: 'Proteja-se contra danos materiais, corporais ou morais causados a terceiros, seja no âmbito profissional ou pessoal. Essencial para profissionais liberais, empresas e até mesmo para o dia a dia.',
    benefits: [
      'Cobertura para danos a terceiros',
      'Proteção para profissionais liberais',
      'Defesa jurídica',
      'Tranquilidade para suas atividades',
    ],
    howToContract: [
      'Analise os riscos da sua atividade.',
      'Escolha a cobertura adequada.',
      'Receba sua proposta.',
      'Contrate e trabalhe com segurança.',
    ],
    faq: [
      { question: 'Cobre danos morais?', answer: 'Sim, a cobertura pode incluir danos morais.' },
      { question: 'É para pessoa física ou jurídica?', answer: 'Pode ser contratado por ambos, dependendo do tipo de seguro.' },
    ],
  },
  'seguro-viagem': {
    title: 'Seguro de Viagem',
    description: 'Viaje com confiança, sabendo que está coberto em suas aventuras pelo mundo.',
    fullDescription: 'Garanta sua tranquilidade em viagens nacionais e internacionais. Cobertura para despesas médicas, extravio de bagagem, cancelamento de viagem e muito mais.',
    benefits: [
      'Despesas médicas e hospitalares',
      'Extravio de bagagem',
      'Cancelamento de viagem',
      'Assistência jurídica',
    ],
    howToContract: [
      'Informe o destino e período da viagem.',
      'Escolha o plano ideal.',
      'Preencha os dados dos viajantes.',
      'Receba sua apólice e viaje tranquilo.',
    ],
    faq: [
      { question: 'Cobre doenças preexistentes?', answer: 'Geralmente sim, com algumas condições e limites.' },
      { question: 'Posso estender o seguro durante a viagem?', answer: 'Sim, em muitos casos é possível estender a cobertura.' },
    ],
  },
  'seguro-familia': {
    title: 'Seguro Família',
    description: 'Crie um pacote de seguros personalizado para atender às necessidades de sua família.',
    fullDescription: 'Um seguro que oferece proteção completa para todos os membros da sua família, combinando diferentes tipos de cobertura em um único plano, como vida, saúde e acidentes pessoais.',
    benefits: [
      'Proteção abrangente para a família',
      'Planos personalizados',
      'Descontos por pacote',
      'Simplificação da gestão de seguros',
    ],
    howToContract: [
      'Converse com um consultor para analisar as necessidades da sua família.',
      'Monte seu pacote de seguros personalizado.',
      'Receba uma proposta única.',
      'Contrate e proteja toda a família.',
    ],
    faq: [
      { question: 'Quais seguros posso incluir?', answer: 'Geralmente vida, saúde, acidentes pessoais, e outros podem ser adicionados.' },
      { question: 'O valor é por pessoa ou por família?', answer: 'O valor é calculado com base na cobertura e no número de membros da família.' },
    ],
  },
};

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string; answer: string }, isOpen: boolean, onClick: () => void }) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div
        className="p-5 cursor-pointer flex items-center justify-between"
        onClick={onClick}
      >
        <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-gray-100">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-[var(--primary)]" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 border-t border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 pt-4">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (serviceId && serviceData[serviceId]) {
      setService(serviceData[serviceId]);
    } else {
      setService(null);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="pt-24 flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600 dark:text-gray-300">Serviço não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <PageHeader
        title={service.title}
        subtitle={service.description}
      />

      {/* Detalhes do Serviço */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Sobre o {service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8 text-[var(--primary)]">Benefícios</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Como Contratar</h3>
              <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                {service.howToContract.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <div className="mt-8 text-center">
                <a href="/contato#orcamento" className="btn-primary inline-block py-3 px-8 font-bold text-white">
                  Solicitar Cotação
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ do Serviço */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Perguntas Frequentes sobre {service.title}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {service.faq.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Proteja o que mais importa com ${service.title}`}
        subtitle="Entre em contato hoje mesmo e descubra as melhores soluções de seguros para você e sua família"
        buttonText="Solicite uma Cotação"
        buttonLink="/contato#orcamento"
        variant="primary"
      />
    </div>
  );
}
