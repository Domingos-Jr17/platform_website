'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'light';
}

export default function CtaSection({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  variant = 'primary' 
}: CtaSectionProps) {
  const sectionClasses = variant === 'primary'
    ? 'bg-[var(--primary)] text-white'
    : 'bg-gray-50 dark:bg-gray-800';
  
  const buttonClasses = variant === 'primary'
    ? 'btn-primary text-white font-bold py-3 px-8 hover:bg-red-700 transition-colors'
    : 'btn-primary';

  return (
    <section className={`py-16 ${sectionClasses}`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={buttonLink} className={buttonClasses}>
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
