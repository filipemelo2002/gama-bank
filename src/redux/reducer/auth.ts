export const TEMPLATE_NAME = 'AUTH';

const initialState = (): AuthInitialState => ({
  usuario: {
    id: undefined,
    cpf: '',
    nome: '',
    login: '',
    redefinirSenha: false,
  },
  conta: {
    id: undefined,
    numero: '',
    saldo: undefined,
    tipo: '',
    descricao: '',
  },
  contaCredito: {
    id: undefined,
    numero: '',
    saldo: undefined,
    tipo: '',
    descricao: '',
  },
  token: '',
  error: false,
  loading: false,
});

type Action = AuthSuccess | AuthPending;

const reducer = (state = initialState(), action: Action): AuthInitialState => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_PENDING`: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_SUCCESS`: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        error: false,
        loading: false,
      };
    }
    case `${TEMPLATE_NAME}_ERROR`: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case `${TEMPLATE_NAME}_RESET`: {
      return initialState();
    }
    default: {
      return state;
    }
  }
};

export default reducer;
