import Redux from 'redux';
import * as Api from '../../api/dashboard';
export const TEMPLATE_NAME = 'DASHBOARD';

export const pending = (): IDashboardPending => ({
  type: `${TEMPLATE_NAME}_PENDING`,
});
export const rejected = (): IDashboardRejected => ({
  type: `${TEMPLATE_NAME}_REJECTED`,
});

export const loadData = (data: IDashboardQueryData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch(pending());
      const response = await Api.loadData(data);
      dispatch<IDashboardSuccess>({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: response,
      });
    } catch (err) {
      dispatch(rejected());
    }
  };
};
