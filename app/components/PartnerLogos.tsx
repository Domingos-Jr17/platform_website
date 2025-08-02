'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerLogos = [
  'arko.png',
  'bettercare.png',
  'britam.jpeg',
  'diamond.png',
  'emose.png',
  'fidelidade.png',
  'global_alliance.jpg',
  'horizonte.png',
  'imperial.png',
  'indico.jpeg',
  'liberty.png',
  'maisvida.png',
  'maximo.jpeg',
  'mediplus.png',
  'medlink.png',
  'mocambique-compania.jpeg',
  'momentum.png',
  'nbc.png',
  'palma.jpeg',
  'sanlam.png',
  'vitality.png',
];

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {partnerLogos.map((logo, index) => (
        <motion.div
          key={logo}
          className="bg-white p-4 rounded-lg shadow-sm w-32 h-16 flex items-center justify-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={`/partner/${logo}`}
            alt={logo.split('.')[0]}
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
