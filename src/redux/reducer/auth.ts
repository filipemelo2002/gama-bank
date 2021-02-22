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

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_SUCCESS`: {
      const { payload } = action;
      return {};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
