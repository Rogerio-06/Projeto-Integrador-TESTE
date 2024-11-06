"use client";

import { FaGoogle, FaFacebookF, FaEnvelope, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import clsx from "clsx";
import { LoginSchema } from "./validationSchemas";
import { AuthCredentials } from "./types";
import React, { useState } from "react";

export default function Signin() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<AuthCredentials>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      console.log(values);
      // Simulate async submission
      setTimeout(() => setIsSubmitting(false), 500);
    },
  });

  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/forest.jpg')" }}
    >
      <section className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row w-full sm:max-w-md md:max-w-lg lg:max-w-4xl">
        <aside className="hidden lg:flex items-center justify-center w-1/2 bg-gray-900 rounded-lg p-4">
          <img
            src="/logo/unifome.png"
            alt="Sign In Illustration"
            className="w-3/4"
          />
        </aside>

        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <header>
            <h1 className="text-2xl font-bold mb-6 text-white text-center">
              Acesso de Usuário
            </h1>
          </header>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className={clsx(
                  "flex items-center p-2 rounded-full bg-gray-700",
                  formik.submitCount > 0
                    ? formik.errors.email
                      ? "border-2 border-red-500"
                      : "border-2 border-green-500"
                    : "border-2 border-gray-600"
                )}
              >
                <span className="px-3 text-gray-400">
                  <FaEnvelope className="w-6 h-6" />
                </span>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-700 w-full sm:w-3/4 lg:w-full p-2 rounded-full focus:outline-none text-gray-200"
                />
              </label>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className={clsx(
                  "flex items-center p-2 rounded-full bg-gray-700",
                  formik.submitCount > 0
                    ? formik.errors.password
                      ? "border-2 border-red-500"
                      : "border-2 border-green-500"
                    : "border-2 border-gray-600"
                )}
              >
                <span className="px-3 text-gray-400">
                  <FaLock className="w-6 h-6" />
                </span>
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="bg-gray-700 w-full sm:w-3/4 lg:w-full p-2 rounded-full focus:outline-none text-gray-200"
                />
              </label>
            </div>

            <div className="mb-4 text-right">
              <a href="#" className="text-gray-300">
                Esqueceu o usuário ou senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 sm:px-8 rounded-full transition-transform duration-300 ease-in-out shadow-lg"
            >
              {isSubmitting ? "Aguarde..." : "Acessar"}
            </button>
          </form>

          <div className="my-6 text-center">
            <p className="text-gray-300 mb-4">Ou acesse com</p>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                aria-label="Acessar com Facebook"
              >
                <FaFacebookF className="w-6 h-6" />
              </button>
              <button
                type="button"
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                aria-label="Acessar com Google"
              >
                <FaGoogle className="w-6 h-6" />
              </button>
            </div>
          </div>

          <footer className="mt-6 text-center">
            <a href="/sign-up" className="text-gray-300">
              Criar uma conta →
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
