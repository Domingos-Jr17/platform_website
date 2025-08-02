'use client';

import { motion } from 'framer-motion';

export default function PoliticaPrivacidadePage() {
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
            Política de Privacidade
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sua privacidade é importante para nós. Saiba como coletamos, usamos e protegemos seus dados.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="prose max-w-none">
            <h2 style={{color: '#003366'}}>1. Coleta de Informações</h2>
            <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone, ao preencher formulários em nosso site.</p>
            {/* TODO: Expandir esta seção com detalhes específicos sobre os tipos de dados coletados, métodos de coleta (cookies, formulários, etc.) e a base legal para a coleta. */}

            <h2 style={{color: '#003366'}}>2. Uso das Informações</h2>
            <p>Utilizamos as informações coletadas para responder às suas solicitações, fornecer os serviços solicitados e melhorar sua experiência em nosso site.</p>
            {/* TODO: Detalhar como as informações são usadas para cada finalidade (ex: marketing, melhoria de produto, atendimento ao cliente). */}

            <h2 style={{color: '#003366'}}>3. Compartilhamento de Informações</h2>
            <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação dos serviços ou por exigência legal.</p>
            {/* TODO: Especificar com quem as informações podem ser compartilhadas (ex: parceiros, prestadores de serviço, autoridades legais) e sob quais condições. */}

            <h2 style={{color: '#003366'}}>4. Segurança dos Dados</h2>
            <p>Empregamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
            {/* TODO: Descrever as medidas de segurança implementadas (ex: criptografia, firewalls, controle de acesso). */}

            <h2 style={{color: '#003366'}}>5. Seus Direitos</h2>
            <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento, entrando em contato conosco.</p>
            {/* TODO: Detalhar os direitos do titular dos dados (ex: direito de acesso, retificação, exclusão, portabilidade, oposição) e como exercê-los. */}

            <h2 style={{color: '#003366'}}>6. Alterações nesta Política</h2>
            <p>Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como protegemos suas informações.</p>
            {/* TODO: Incluir a data da última atualização e como os usuários serão notificados sobre as mudanças. */}
          </div>
        </div>
      </section>
    </div>
  );
}