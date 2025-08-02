'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="dark:hidden">
              <Image src="/logo_platform_black.png" alt="Platform Logo" width={64} height={26} />
            </div>
            <div className="hidden dark:block">
              <Image src="/logo_platform-light.png" alt="Platform Logo" width={64} height={26} />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white transition-colors group-hover:text-[var(--primary)]">
              PLATAFORM SEGUROS
            </span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors">Serviços</Link>
          <Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors">Sobre Nós</Link>
          <Link href="/suporte" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors">Suporte</Link>
          <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors">Contato</Link>
        </nav>
        
        <div className="flex items-center">
          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:block text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] focus:outline-none mr-4"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contato#orcamento" className="btn-primary py-3 px-8 font-bold text-white">
              Solicitar Cotação
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu with Animation */}
      <motion.div 
        className="md:hidden bg-white dark:bg-gray-800 py-4 px-6 shadow-lg"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex flex-col space-y-4">
          <Link href="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
          <Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
          <Link href="/suporte" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Suporte</Link>
          <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          <Link href="/contato#orcamento" className="btn-primary text-center text-white py-3 px-8 font-bold hover:bg-red-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Solicitar Cotação
          </Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] focus:outline-none mt-4"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </motion.div>
    </header>
  );
}