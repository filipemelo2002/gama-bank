import { AxiosError } from 'axios';
import Redux from 'redux';
import * as Auth from '../../api/auth';
import { TEMPLATE_NAME } from '../reducer/auth';

export const login = (data: LoginData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch<AuthPending>({ type: `${TEMPLATE_NAME}_PENDING` });
      const response = await Auth.login(data);
      dispatch<AuthSuccess>({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: response,
      });
    } catch (error) {
      dispatch<AuthRejected>({
        type: `${TEMPLATE_NAME}_REJECTED`,
        payload: error,
      });
    }
  };
};
