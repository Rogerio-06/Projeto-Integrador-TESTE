"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/UseFadeIn";
import Button from '@/shared/components/Button';

export default function PricesSection() {
  const fadeInVariants = useFadeIn();

  const plans = [
    {
      name: "Plano Bronze",
      price: "R$200",
      period: "/mês",
      features: [
        "1.5% dos recebimentos",
        "Gestão de NFs e de fornecedores",
        "Acesso ao dashboard/gráficos",
      ],
      delay: 0,
    },
    {
      name: "Plano Silver",
      price: "R$300",
      period: "/mês",
      features: [
        "2x ao mês clube de descontos",
        "1.5% dos recebimentos",
        "Gestão de NFs e de fornecedores",
        "Acesso ao dashboard/gráficos",
      ],
      delay: 0.2,
    },
    {
      name: "Plano Gold",
      price: "R$550",
      features: [
        "6x ao mês clube de descontos",
        "1.5% dos recebimentos",
        "Gestão de NFs e de fornecedores",
        "Acesso ao dashboard/gráficos",
        "Suporte do nosso time",
      ],
      delay: 0.4,
    },
  ];

  return (
    <section
      id="prices"
      className="my-12 sm:my-20 px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white tracking-tight">
        Escolha o plano ideal para você
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-center gap-6 lg:gap-9">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="p-6 sm:p-8 bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out w-full max-w-[350px] lg:w-[30%] min-h-[520px] flex flex-col justify-between"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            custom={plan.delay}
          >
          
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                {plan.name}
              </h3>
              <p className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-2">
                {plan.price}
                {plan.period && (
                  <span className="text-xl font-medium">{plan.period}</span>
                )}
              </p>
            </div>

            <ul className="mt-4 mb-6 text-gray-300 space-y-2 text-sm sm:text-base">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Image
                    src="/verify.svg"
                    alt="Verificado"
                    width={16}
                    height={16}
                    className="inline mr-2"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-700 mt-6 pt-6">
              <div className="flex justify-center">
                <Button href="#prices" label="Teste Grátis" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
