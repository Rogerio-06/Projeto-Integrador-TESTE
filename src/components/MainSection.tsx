"use client";
import Button from '@/shared/components/Button';
import { useSlideIn } from '../hooks/UseSlideIn';

export default function MainSection() { 
  const slideInLeft = useSlideIn('left');
  const slideInRight = useSlideIn('right');
  return (
    <section id="about" className="my-8 md:my-16 px-4 flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between scroll-mt-32">
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0" style={slideInLeft}>
        <img src="/food.svg" alt="Team" className="w-full h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto" />
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8" style={slideInRight}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white leading-tight">
          Não é apenas um APP,
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6 sm:mb-8">
          É UniFome
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-full sm:max-w-3xl">
          O UniFome oferece as ferramentas necessárias para otimizar o relacionamento com seus clientes, aumentar e impulsionar suas vendas de maneira eficaz.
        </p>
        <Button href="#beverages" label="Ir ao Cardápio" />
      </div>
    </section>
  );
}
