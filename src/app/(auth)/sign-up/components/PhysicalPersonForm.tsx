import { FaUser, FaEnvelope, FaLock, FaPhone, FaIdCard } from "react-icons/fa";
import { useFormik, FormikProps } from "formik";
import { PhysicalPersonSchema } from "../validationSchemas";
import clsx from "clsx";
import { forwardRef, useImperativeHandle } from "react";
import { PhysicalPerson } from "../types";

const PhysicalPersonForm = forwardRef<FormikProps<PhysicalPerson>>((props, ref) => {
  const formik = useFormik<PhysicalPerson>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      cpf: "",
    },
    validationSchema: PhysicalPersonSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        console.log(values);
      }
    },
  });

  useImperativeHandle(ref, () => formik);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
      <div className="col-span-1 md:col-span-2 mb-3">
        <div
          className={clsx(
            "flex items-center p-2 rounded-full bg-gray-700 w-full",
            formik.submitCount > 0
              ? formik.errors.name
                ? "border-2 border-red-500"
                : "border-2 border-green-500"
              : "border-2 border-gray-600"
          )}
        >
          <span className="px-3 text-gray-400">
            <FaUser className="w-6 h-6" />
          </span>
          <input
            type="text"
            placeholder="Nome completo"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="bg-gray-700 w-full p-2 rounded-full focus:outline-none text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mb-3">
        <div
          className={clsx(
            "flex items-center p-2 rounded-full bg-gray-700 w-full",
            formik.submitCount > 0
              ? formik.errors.phone
                ? "border-2 border-red-500"
                : "border-2 border-green-500"
              : "border-2 border-gray-600"
          )}
        >
          <span className="px-3 text-gray-400">
            <FaPhone className="w-6 h-6" />
          </span>
          <input
            type="text"
            placeholder="Telefone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="bg-gray-700 w-full p-2 rounded-full focus:outline-none text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mb-3">
        <div
          className={clsx(
            "flex items-center p-2 rounded-full bg-gray-700 w-full",
            formik.submitCount > 0
              ? formik.errors.cpf
                ? "border-2 border-red-500"
                : "border-2 border-green-500"
              : "border-2 border-gray-600"
          )}
        >
          <span className="px-3 text-gray-400">
            <FaIdCard className="w-6 h-6" />
          </span>
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cpf}
            className="bg-gray-700 w-full p-2 rounded-full focus:outline-none text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 mb-3">
        <div
          className={clsx(
            "flex items-center p-2 rounded-full bg-gray-700 w-full",
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
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="bg-gray-700 w-full p-2 rounded-full focus:outline-none text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mb-3">
        <div
          className={clsx(
            "flex items-center p-2 rounded-full bg-gray-700 w-full",
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="bg-gray-700 w-full p-2 rounded-full focus:outline-none text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mb-3">
        <div
          className={clsx(
            "flex items-center p-2 rounded-full bg-gray-700 w-full",
            formik.submitCount > 0
              ? formik.errors.confirmPassword
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
            placeholder="Confirmar senha"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="bg-gray-700 w-full p-2 rounded-full focus:outline-none text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>
    </form>
  );
});

export default PhysicalPersonForm;
