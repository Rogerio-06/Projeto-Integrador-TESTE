"use client";

import { useState } from "react";
import Button from '@/shared/components/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo/unifome.png"
            alt="Backwoods Labs CRM"
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Sobre
          </a>
          <a
            href="#beverages"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Bebidas
          </a>
          <a
            href="#snacks"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Salgados
          </a>
          <a
            href="#prices"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Planos
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Contato
          </a>
        
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="sign-in"
            className="px-4 py-2 bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
          >
            Login
          </a>
          <a
            href="sign-up"
            className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition duration-300"
          >
            Cadastrar-se
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative flex items-center justify-center w-10 h-10 text-white focus:outline-none"
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`block absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 top-2.5" : "top-0"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "top-2.5"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 top-2.5" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#about"
                className="hover:text-green-400 transition-colors duration-300 block text-lg px-4 py-2"
                onClick={toggleMenu}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#beverages"
                className="hover:text-yellow-400 transition-colors duration-300 block text-lg px-4 py-2"
                onClick={toggleMenu}
              >
                Bebidas
              </a>
            </li>
            <li>
              <a
                href="#snacks"
                className="hover:text-yellow-400 transition-colors duration-300 block text-lg px-4 py-2"
                onClick={toggleMenu}
              >
                Salgados
              </a>
            </li>
            <li>
              <a
                href="#prices"
                className="hover:text-yellow-400 transition-colors duration-300 block text-lg px-4 py-2"
                onClick={toggleMenu}
              >
                Planos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors duration-300 block text-lg px-4 py-2"
                onClick={toggleMenu}
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="sign-in"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block text-lg px-4 py-3 border-t border-gray-700"
                onClick={toggleMenu}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="sign-up"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block text-lg px-4"
                onClick={toggleMenu}
              >
                Cadastrar-se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
