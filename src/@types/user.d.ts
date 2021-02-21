interface LoginSuccessResponse {
  usuario: {
    id: number;
    cpf: string;
    nome: string;
    login: string;
    redefinirSenha: boolean;
  };
  conta: {
    id: number;
    numero: string;
    saldo: number;
    tipo: string;
    descricao: string;
  };
  contaCredito: {
    id: number;
    numero: string;
    saldo: number;
    tipo: string;
    descricao: string;
  };
  token: string;
}
