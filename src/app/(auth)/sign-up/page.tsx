"use client";

import { useState, useRef } from "react";
import PhysicalPersonForm from "./components/PhysicalPersonForm";
import LegalPersonForm from "./components/LegalPersonForm";
import { FormikProps } from "formik";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Signup() {
  const [isPhysicalPerson, setIsPhysicalPerson] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const physicalPersonFormRef = useRef<FormikProps<any>>(null);
  const legalPersonFormRef = useRef<FormikProps<any>>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      if (isPhysicalPerson && physicalPersonFormRef.current) {
        await physicalPersonFormRef.current.submitForm();
      } else if (!isPhysicalPerson && legalPersonFormRef.current) {
        await legalPersonFormRef.current.submitForm();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/forest.jpg')" }}
    >
      <div className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row w-full sm:max-w-md md:max-w-lg lg:max-w-6xl">
        <aside className="hidden lg:flex items-center justify-center w-1/2 bg-gray-900 rounded-lg p-4">
          <img
            src="/logo/unifome.png"
            alt="Sign Up Illustration"
            className="w-3/4"
          />
        </aside>

        <div className="w-full lg:w-[60%] p-6 lg:p-10">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            {isPhysicalPerson ? "Cadastro Pessoa Física" : "Cadastro Pessoa Jurídica"}
          </h2>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setIsPhysicalPerson(true)}
              className={`py-2 px-4 rounded-full ${
                isPhysicalPerson ? "bg-yellow-600 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Pessoa Física
            </button>
            <button
              onClick={() => setIsPhysicalPerson(false)}
              className={`py-2 px-4 rounded-full ${
                !isPhysicalPerson ? "bg-yellow-600 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Pessoa Jurídica
            </button>
          </div>

          {isPhysicalPerson ? (
            <PhysicalPersonForm ref={physicalPersonFormRef} />
          ) : (
            <LegalPersonForm ref={legalPersonFormRef} />
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full mt-8 bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 sm:px-8 rounded-full transition-transform duration-300 ease-in-out shadow-lg"
          >
            {isSubmitting ? "Finalizando Cadastro..." : "Finalizar Cadastro"}
          </button>

          <div className="my-6 text-center">
            <p className="text-gray-300 mb-4">Ou cadastre-se com</p>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                aria-label="Cadastrar com Facebook"
              >
                <FaFacebookF className="w-6 h-6" />
              </button>
              <button
                type="button"
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                aria-label="Cadastrar com Google"
              >
                <FaGoogle className="w-6 h-6" />
              </button>
            </div>
          </div>

          <footer className="mt-6 text-center">
            <a href="/sign-in" className="text-gray-300">
              Já tem uma conta? Fazer login →
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
