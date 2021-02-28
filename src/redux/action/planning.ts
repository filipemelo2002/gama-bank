import Redux from 'redux';
import * as Api from '../../api/planning';
export const TEMPLATE_NAME = 'PLANNING';

export const pending = (): PlanningPending => {
  return {
    type: `${TEMPLATE_NAME}_PENDING`,
  };
};

export const rejected = (): PlanningRejected => {
  return {
    type: `${TEMPLATE_NAME}_REJECTED`,
  };
};

export const finished = (): PlanningPending => {
  return {
    type: `${TEMPLATE_NAME}_FINISHED`,
  };
};

export const loadData = (login: string) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch(pending());
      const reponse = await Api.loadData(login);
      dispatch<PlanningSuccess>({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: reponse,
      });
    } catch (err) {
      dispatch(rejected());
    }
  };
};

export const create = (data: PlanningData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch(pending());
      await Api.create(data);
      dispatch(finished());
    } catch (err) {
      dispatch(rejected());
    }
  };
};

export const transaction = (data: PlanningTransactionData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch(pending());
      await Api.transaction(data);
      dispatch(finished());
    } catch (err) {
      dispatch(rejected());
    }
  };
};
