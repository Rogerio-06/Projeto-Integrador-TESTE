import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Precisamos de seu e-mail para autenticação.')
    .test(
      'email',
      'Forneça um e-mail válido.',
      (value) => yup.string().email().isValidSync(value) || yup.string().min(3).isValidSync(value)
    ),
  password: yup
    .string()
    .min(8, 'Sua senha deve ter pelo menos 8 caracteres para garantir segurança.')
    .required('A senha é obrigatória para entrar em sua conta.'),
});
