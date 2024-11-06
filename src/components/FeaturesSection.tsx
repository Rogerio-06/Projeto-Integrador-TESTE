"use client";

import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/UseFadeIn";
import { useState } from "react";
import ItemCard from "@/shared/components/ItemCard";
import { beverages } from "@/data/ProductsData";

export default function BeveragesSection() {
  const fadeInVariants = useFadeIn();
  const [index, setIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [quantities, setQuantities] = useState<number[]>(Array(beverages.length).fill(0));

  const handleNextMobile = () => setIndex((prevIndex) => (prevIndex + 1) % beverages.length);
  const handlePrevMobile = () => setIndex((prevIndex) => (prevIndex - 1 + beverages.length) % beverages.length);
  const handleNextDesktop = () => setStartIndex((prevIndex) => (prevIndex + 3) % beverages.length);
  const handlePrevDesktop = () => setStartIndex((prevIndex) => (prevIndex - 3 + beverages.length) % beverages.length);

  const incrementQuantity = (i: number) => {
    setQuantities((prev) => prev.map((q, idx) => (idx === i ? q + 1 : q)));
  };

  const decrementQuantity = (i: number) => {
    setQuantities((prev) => prev.map((q, idx) => (idx === i && q > 0 ? q - 1 : q)));
  };

  const visibleBeveragesDesktop = [
    beverages[startIndex],
    beverages[(startIndex + 1) % beverages.length],
    beverages[(startIndex + 2) % beverages.length],
  ];

  return (
    <section id="beverages" className="my-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">Bebidas</h2>

    
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
            {...beverages[index]}
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
          {visibleBeveragesDesktop.map((beverage, i) => (
            <ItemCard
              key={(startIndex + i) % beverages.length}
              {...beverage}
              quantity={quantities[(startIndex + i) % beverages.length]}
              onIncrement={() => incrementQuantity((startIndex + i) % beverages.length)}
              onDecrement={() => decrementQuantity((startIndex + i) % beverages.length)}
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
