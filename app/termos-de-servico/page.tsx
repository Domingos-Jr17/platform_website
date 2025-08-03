'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/app/components/ui/PageHeader';

export default function TermosDeServicoPage() {
  return (
    <div className="pt-24">
      <PageHeader
        title="Termos de Serviço"
        subtitle="Ao utilizar nossos serviços, você concorda com os termos e condições descritos abaixo."
      />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-[var(--primary)]">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar este website e nossos serviços, você concorda em cumprir e estar vinculado a estes Termos de Serviço.</p>
            {/* NOTE: Detalhar as condições de aceitação (ex: ao usar o site, ao clicar em 'concordo'). */}

            <h2 className="text-[var(--primary)]">2. Uso dos Serviços</h2>
            <p>Nossos serviços são fornecidos para fins informativos e de contratação de seguros. Você concorda em usar os serviços apenas para fins legais e de acordo com estes Termos.</p>
            {/* NOTE: Especificar restrições de uso, conduta do usuário, e o que constitui uso indevido. */}

            <h2 className="text-[var(--primary)]">3. Propriedade Intelectual</h2>
            <p>Todo o conteúdo presente neste website, incluindo textos, gráficos, logotipos, imagens e software, é de propriedade da Platform Corretora de Seguros ou de seus licenciadores e é protegido por leis de direitos autorais.</p>
            {/* NOTE: Detalhar direitos autorais, marcas registradas, licenças de uso de conteúdo de terceiros, e proibições de reprodução/distribuição. */}

            <h2 className="text-[var(--primary)]">4. Limitação de Responsabilidade</h2>
            <p>A Platform Corretora de Seguros não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar este website ou nossos serviços.</p>
            {/* NOTE: Expandir sobre as limitações de responsabilidade, isenções de garantia, e casos específicos de não responsabilidade. */}

            <h2 className="text-[var(--primary)]">5. Links de Terceiros</h2>
            <p>Este website pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou pelas práticas de privacidade desses sites.</p>
            {/* NOTE: Esclarecer a política de links externos e a responsabilidade do usuário ao acessá-los. */}

            <h2 className="text-[var(--primary)]">6. Alterações nos Termos</h2>
            <p>Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no website.</p>
            {/* NOTE: Incluir a data da última atualização e como os usuários serão notificados sobre as mudanças. */}
          </div>
        </div>
      </section>
    </div>
  );
}
