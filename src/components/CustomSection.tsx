"use client";

import { useSlideIn } from '../hooks/UseSlideIn';
import Button from '@/shared/components/Button';

export default function CustomSection() {
  const slideInLeft = useSlideIn('left');
  const slideInRight = useSlideIn('right');

  return (
    <section className="my-8 md:my-16 px-4 flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between">
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pr-8" style={slideInLeft}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
          Transforme
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-6 sm:mb-8">
          Com UniFome
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-full sm:max-w-3xl">
          Nossa solução oferece uma plataforma integrada e intuitiva para facilitar a gestão de vendas e processos, trazendo uma experiência mais próxima e personalizada para os usuários. Eleve suas operações e conquiste melhores resultados com a tecnologia inovadora do Unifome.
        </p>
        <Button href="#contact" label="Veja Mais" />
        
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0" style={slideInRight}>
        <img
          src="/graphic.svg"
          alt="Equipe"
          className="w-full h-auto object-cover max-w-sm md:max-w-md lg:max-w-full mx-auto"
        />
      </div>
    </section>
  );
}
