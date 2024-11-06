"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";
import PricesSection from "../components/PricesSection";
import CustomSection from "../components/CustomSection";
import MainSection from "../components/MainSection";
import SnacksSection from "../components/SnacksSection";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 overflow-hidden">
      <Header />

      <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto relative z-10">
        <MainSection />
        <FeaturesSection />
        <SnacksSection />
        <CustomSection />
        <PricesSection />
      </main>

      <Footer />
    </div>
  );
}
