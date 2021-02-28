export const TEMPLATE_NAME = 'PLANNING';

const initialState = (): PlanningState => ({
  plannings: [] as Planning[],
  loading: false,
  error: false,
});

type Action = PlanningPending | PlanningRejected | PlanningSuccess;

const reducer = (state = initialState(), action: Action): PlanningState => {
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
        plannings: payload,
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
    case `${TEMPLATE_NAME}_FINISHED`: {
      return {
        ...state,
        loading: true,
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
