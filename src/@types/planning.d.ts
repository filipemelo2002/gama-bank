interface Planning {
  descricao: string;
  id: number | undefined;
  login: string;
  padrao: boolean;
  tipMovimento: string;
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