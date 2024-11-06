"use client";

import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/UseFadeIn";
import { useState } from "react";
import ItemCard from "@/shared/components/ItemCard";
import { snacks } from "@/data/ProductsData";

export default function SnacksSection() {
  const fadeInVariants = useFadeIn();
  const [index, setIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [quantities, setQuantities] = useState<number[]>(Array(snacks.length).fill(0));

  const handleNextMobile = () => setIndex((prevIndex) => (prevIndex + 1) % snacks.length);
  const handlePrevMobile = () => setIndex((prevIndex) => (prevIndex - 1 + snacks.length) % snacks.length);
  const handleNextDesktop = () => setStartIndex((prevIndex) => (prevIndex + 3) % snacks.length);
  const handlePrevDesktop = () => setStartIndex((prevIndex) => (prevIndex - 3 + snacks.length) % snacks.length);

  const incrementQuantity = (i: number) => {
    setQuantities((prev) => prev.map((q, idx) => (idx === i ? q + 1 : q)));
  };

  const decrementQuantity = (i: number) => {
    setQuantities((prev) => prev.map((q, idx) => (idx === i && q > 0 ? q - 1 : q)));
  };

  const visibleSnacksDesktop = [
    snacks[startIndex],
    snacks[(startIndex + 1) % snacks.length],
    snacks[(startIndex + 2) % snacks.length],
  ];

  return (
    <section id="snacks" className="my-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">Salgados</h2>

      {/* Versão Mobile */}
      <div className="relative flex items-center justify-center md:hidden">
        <button
          onClick={handlePrevMobile}
          className="absolute left-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none"
        >
          {"<"}
        </button>

        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden w-full flex items-center justify-center mx-8"
        >
          <ItemCard
            {...snacks[index]}
            quantity={quantities[index]}
            onIncrement={() => incrementQuantity(index)}
            onDecrement={() => decrementQuantity(index)}
          />
        </motion.div>

        <button
          onClick={handleNextMobile}
          className="absolute right-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none"
        >
          {">"}
        </button>
      </div>

      {/* Versão Desktop */}
      <div className="relative max-w-6xl mx-auto items-center hidden md:flex">
        <button onClick={handlePrevDesktop} className="absolute left-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          {"<"}
        </button>

        <motion.div
          key={startIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center space-x-4"
        >
          {visibleSnacksDesktop.map((snack, i) => (
            <ItemCard
              key={i}
              {...snack}
              quantity={quantities[startIndex + i]}
              onIncrement={() => incrementQuantity(startIndex + i)}
              onDecrement={() => decrementQuantity(startIndex + i)}
            />
          ))}
        </motion.div>

        <button onClick={handleNextDesktop} className="absolute right-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          {">"}
        </button>
      </div>
    </section>
  );
}
