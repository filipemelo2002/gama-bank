interface Planning {
  descricao: string;
  id?: number | undefined;
  login: string;
  padrao?: boolean;
  tipoMovimento: string;
}

interface PlanningState {
  plannings: Planning[] | undefined;
  loading: boolean;
  error: boolean;
}

interface PlanningPending {
  type: string;
  payload?: undefined;
}

type PlanningRejected = PlanningPending;

interface PlanningSuccess {
  type: string;
  payload: Planning[];
}

type PlanningData = Planning;

interface PlanningTransactionData {
  conta: number;
  contaDestino: string;
  data: string;
  descricao: string;
  login: string;
  planoConta: number;
  valor: number;
}
