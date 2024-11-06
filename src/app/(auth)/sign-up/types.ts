export interface PhysicalPerson {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cpf: string;
}

export interface LegalPerson {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cnpj: string;
}
