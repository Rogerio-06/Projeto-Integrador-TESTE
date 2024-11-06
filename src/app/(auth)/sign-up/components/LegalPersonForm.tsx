import {
  FaEnvelope,
  FaLock,
  FaPhone,
  FaBuilding,
  FaAddressCard,
} from "react-icons/fa";
import { useFormik, FormikProps } from "formik";
import { LegalPersonSchema } from "../validationSchemas";
import clsx from "clsx";
import { forwardRef, useImperativeHandle } from "react";
import { LegalPerson } from "../types";

const LegalPersonForm = forwardRef<FormikProps<LegalPerson>>((props, ref) => {
  const formik = useFormik<LegalPerson>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      cnpj: "",
      companyName: "",
    },
    validationSchema: LegalPersonSchema,
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
              ? formik.errors.companyName
                ? "border-2 border-red-500"
                : "border-2 border-green-500"
              : "border-2 border-gray-600"
          )}
        >
          <span className="px-3 text-gray-400">
            <FaBuilding className="w-6 h-6" />
          </span>
          <input
            type="text"
            placeholder="Nome da empresa"
            name="companyName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
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
              ? formik.errors.cnpj
                ? "border-2 border-red-500"
                : "border-2 border-green-500"
              : "border-2 border-gray-600"
          )}
        >
          <span className="px-3 text-gray-400">
            <FaAddressCard className="w-6 h-6" />
          </span>
          <input
            type="text"
            placeholder="CNPJ"
            name="cnpj"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cnpj}
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

export default LegalPersonForm;
