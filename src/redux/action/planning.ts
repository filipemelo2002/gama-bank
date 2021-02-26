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
    } catch (err) {
      dispatch(rejected());
    }
  };
};
