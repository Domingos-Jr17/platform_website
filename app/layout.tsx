import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CookieBanner from './components/CookieBanner';

// Configuração das fontes
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Platform Corretora de Seguros | Proteção e Inovação em Moçambique',
  description: 'Soluções personalizadas de seguros em Moçambique. Especialistas em seguros de vida, automóvel, saúde e mais.',
  keywords: 'seguros Moçambique, corretora de seguros Maputo, seguro de vida, seguro automóvel, seguro saúde',
  authors: [{ name: 'Platform Corretora de Seguros' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Platform Corretora de Seguros',
    description: 'Soluções personalizadas de seguros em Moçambique',
    type: 'website',
    locale: 'pt_MZ',
  },
};

import { ThemeProvider } from './components/ThemeProvider';   

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-MZ" className={`${montserrat.variable} ${openSans.variable}`}>
      {/* Preconecte a origens externas críticas */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Se usar Google Analytics */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Se usar imagens de CDN externo */}
      <link rel="preconnect" href="https://cdn.example.com" />
      
      {/* Pré-carregue recursos críticos */}
      <link rel="preload" href="/fonts/inter-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg-optimized.jpg" as="image" />
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <ThemeProvider>    
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
         </ThemeProvider>    
      </body>
    </html>
  );
}