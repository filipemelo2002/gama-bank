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

type Action = AuthSuccess | AuthPending | AuthRejected | AuthChangePassword;

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
      const { payload } = action as AuthSuccess;
      return {
        ...state,
        ...payload,
        error: false,
        loading: false,
      };
    }
    case `${TEMPLATE_NAME}_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case `${TEMPLATE_NAME}_CHANGE_PASSWORD`: {
      return {
        ...state,
        usuario: {
          ...state.usuario,
          redefinirSenha: true,
        },
        loading: false,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_RESET`: {
      return initialState();
    }
    case 'RESET': {
      return initialState();
    }
    default: {
      return state;
    }
  }
};

export default reducer;
