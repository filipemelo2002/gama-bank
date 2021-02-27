interface AuthInitialState extends LoginSuccessResponse {
  error: boolean;
  loading: boolean;
}

interface AuthSuccess {
  type: string;
  payload: LoginSuccessResponse;
}

interface AuthPending {
  type: string;
  payload?: undefined;
}
interface AuthChangePassword {
  type: string;
  payload: string;
}

type AuthRejected = AuthPending;
