'use client';

import { motion } from 'framer-motion';

export default function TermosDeServicoPage() {
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
            Termos de Serviço
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ao utilizar nossos serviços, você concorda com os termos e condições descritos abaixo.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="prose max-w-none">
            <h2 style={{color: '#003366'}}>1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar este website e nossos serviços, você concorda em cumprir e estar vinculado a estes Termos de Serviço.</p>
            {/* TODO: Detalhar as condições de aceitação (ex: ao usar o site, ao clicar em 'concordo'). */}

            <h2 style={{color: '#003366'}}>2. Uso dos Serviços</h2>
            <p>Nossos serviços são fornecidos para fins informativos e de contratação de seguros. Você concorda em usar os serviços apenas para fins legais e de acordo com estes Termos.</p>
            {/* TODO: Especificar restrições de uso, conduta do usuário, e o que constitui uso indevido. */}

            <h2 style={{color: '#003366'}}>3. Propriedade Intelectual</h2>
            <p>Todo o conteúdo presente neste website, incluindo textos, gráficos, logotipos, imagens e software, é de propriedade da Platform Corretora de Seguros ou de seus licenciadores e é protegido por leis de direitos autorais.</p>
            {/* TODO: Detalhar direitos autorais, marcas registradas, licenças de uso de conteúdo de terceiros, e proibições de reprodução/distribuição. */}

            <h2 style={{color: '#003366'}}>4. Limitação de Responsabilidade</h2>
            <p>A Platform Corretora de Seguros não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar este website ou nossos serviços.</p>
            {/* TODO: Expandir sobre as limitações de responsabilidade, isenções de garantia, e casos específicos de não responsabilidade. */}

            <h2 style={{color: '#003366'}}>5. Links de Terceiros</h2>
            <p>Este website pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou pelas práticas de privacidade desses sites.</p>
            {/* TODO: Esclarecer a política de links externos e a responsabilidade do usuário ao acessá-los. */}

            <h2 style={{color: '#003366'}}>6. Alterações nos Termos</h2>
            <p>Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no website.</p>
            {/* TODO: Incluir a data da última atualização e como os usuários serão notificados sobre as mudanças. */}
          </div>
        </div>
      </section>
    </div>
  );
}