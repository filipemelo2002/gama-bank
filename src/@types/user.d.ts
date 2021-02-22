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
