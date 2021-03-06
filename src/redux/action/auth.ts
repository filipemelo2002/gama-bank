import Redux from 'redux';
import * as Auth from '../../api/auth';
import { TEMPLATE_NAME } from '../reducer/auth';

export const login = (data: LoginData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch<AuthPending>({ type: `${TEMPLATE_NAME}_PENDING` });
      const response = await Auth.login(data);
      localStorage.setItem('@tokenApp', response.token);
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

export const forgotPassword = ({ userName, password }: ForgotPasswordData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch<AuthPending>({ type: `${TEMPLATE_NAME}_PENDING` });
      await Auth.forgotPassword({ userName, password });
      dispatch<AuthChangePassword>({
        type: `${TEMPLATE_NAME}_CHANGE_PASSWORD`,
        payload: password,
      });
    } catch (error) {
      dispatch<AuthRejected>({
        type: `${TEMPLATE_NAME}_REJECTED`,
        payload: error,
      });
    }
  };
};
