'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-white dark:bg-gray-900 dark:text-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-[var(--primary)] text-white font-bold text-xl py-2 px-4 rounded inline-block mb-4">
              PLATFORM
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 max-w-md">
              Corretora de Seguros especializada em oferecer soluções nos ramos Vida e Não Vida, com equipe experiente e comprometida com a excelência.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com/platformseguros" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors" 
                aria-label="Facebook"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/platformseguros" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/platformseguros" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors" 
                aria-label="Instagram"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Links Úteis */}
          <div>
            <h3 className=" text-gray-600  dark:text-gray-300 text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Serviços</Link>
              </li>
              <li>
                <Link href="/suporte" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Suporte</Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-gray-600  dark:text-gray-300 text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-blue-500" size={18} />
                <span className="text-gray-400 dark:text-gray-500">Av. Vladimir Lenine N. 174, Edifício Millenium Park, 1ºAndar Esq. 1100, Maputo - Moçambique</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-500" size={18} />
                <a href="tel:+258877970000" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">+258 87 797 0000</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-500" size={18} />
                <a href="mailto:comercial@platformseguros.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">comercial@platformseguros.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Platform Corretora de Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}