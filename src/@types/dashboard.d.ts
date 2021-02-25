interface ILancamentosData {
  id: number;
  conta: number;
  data: string;
  descricao: string;
  planoConta: {
    id: number;
    descricao: string;
  };
  tipo: 'R' | 'D';
  valor: string;
}

interface IAccountData {
  contaBanco: {
    id: number | undefined;
    lancamentos: ILancamentosData[];
    saldo: string;
  };
  contaCredito: {
    id: number | undefined;
    lancamentos: ILancamentosData[];
    saldo: string;
  };
}

interface IDashboardQueryData {
  fim: string;
  inicio: string;
  login: string;
}

interface IDashboardState extends IAccountData {
  loading: boolean;
  error: boolean;
}

interface IDashboardSuccess {
  type: string;
  payload: IAccountData;
}

interface IDashboardPending {
  type: string;
  payload?: undefined;
}

type IDashboardRejected = IDashboardPending;
