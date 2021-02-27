interface LoginSuccessResponse {
  usuario: {
    id: number | undefined;
    cpf: string;
    nome: string;
    login: string;
    redefinirSenha: boolean;
  };
  conta: {
    id: number | undefined;
    numero: string;
    saldo: number | undefined;
    tipo: string;
    descricao: string;
  };
  contaCredito: {
    id: number | undefined;
    numero: string;
    saldo: number | undefined;
    tipo: string;
    descricao: string;
  };
  token: string;
}

interface LoginData {
  usuario: string;
  senha: string;
}

interface SignUpData {
  cpf: string;
  login: string;
  nome: string;
  senha: string;
}

interface ForgotPasswordData {
  userName: string;
  password: string;
}
