import Api from '.';

export const login = async (data: LoginData): Promise<LoginSuccessResponse> => {
  const response = await Api.post<LoginSuccessResponse>('login', data);
  return response.data;
};

export const signUp = async (data: SignUpData): Promise<void> => {
  await Api.post<void>('usuarios', data);
};
