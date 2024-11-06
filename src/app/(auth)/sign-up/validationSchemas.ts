import * as yup from 'yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export const PhysicalPersonSchema = yup.object().shape({
  name: yup.string().required('Por favor, insira seu nome completo para continuar.'),
  email: yup
    .string()
    .email('O e-mail que você forneceu parece estar incorreto. Verifique e tente novamente.')
    .required('Precisamos do seu e-mail para entrar em contato.'),
  password: yup
    .string()
    .min(8, 'Sua senha precisa ter pelo menos 8 caracteres para ser segura.')
    .required('Por favor, defina uma senha para proteger sua conta.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não coincidem. Verifique novamente.')
    .required('Você precisa confirmar sua senha.'),
  phone: yup
    .string()
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, 'Por favor, insira um número de telefone válido com DDD.')
    .required('Por favor, insira seu número de telefone para que possamos entrar em contato, se necessário.'),
  cpf: yup
    .string()
    .test('cpf-valido', 'CPF inválido. Verifique e tente novamente.', (value) => cpf.isValid(value || ''))
    .required('Por favor, insira seu CPF para validação.'),
});

export const LegalPersonSchema = yup.object().shape({
  email: yup
    .string()
    .email('O e-mail fornecido parece estar incorreto. Verifique e tente novamente.')
    .required('Precisamos do e-mail para entrar em contato.'),
  password: yup
    .string()
    .min(8, 'Sua senha deve ter pelo menos 8 caracteres para garantir segurança.')
    .required('Por favor, crie uma senha para proteger sua conta.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas informadas não coincidem. Verifique e tente novamente.')
    .required('Confirme sua senha para finalizar o cadastro.'),
  phone: yup
    .string()
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, 'Por favor, insira um número de telefone válido com DDD.')
    .required('Insira um número de telefone para contato.'),
  cnpj: yup
    .string()
    .test('cnpj-valido', 'CNPJ inválido. Verifique e tente novamente.', (value) => cnpj.isValid(value || ''))
    .required('O CNPJ é necessário para validar a empresa.'),
  companyName: yup
    .string()
    .required('Por favor, insira o nome da empresa para concluir o cadastro.'),
});
