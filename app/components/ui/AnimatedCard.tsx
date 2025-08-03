import { motion } from 'framer-motion';

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // Use will-change para otimizar ainda mais
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}