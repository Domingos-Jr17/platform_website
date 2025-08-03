import Image from 'next/image';
import { useState } from 'react';

export function OptimizedHeroImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative h-[500px] w-full">
      {/* Imagem de baixa qualidade enquanto carrega */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 blur-sm"
          style={{
            backgroundImage: `url('/images/hero-bg-small.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {/* Imagem de alta qualidade */}
      <Image
        src="/images/hero-bg-optimized.jpg"
        alt="Proteção de seguros"
        fill
        priority
        className={`object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="100vw"
        onLoad={() => setIsLoaded(true)}
        // Use formatos modernos
        quality={85}
      />
      
      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 bg-[var(--primary)]/70 flex items-center justify-center">
        <div className="text-center text-white p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Proteção que você pode confiar</h1>
          <p className="text-xl mb-8">Soluções completas em seguros para você e sua família</p>
          <button className="bg-[var(--accent)] text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
            Solicite uma cotação
          </button>
        </div>
      </div>
    </div>
  );
}