import Api from '.';

export const login = async (data: LoginData): Promise<LoginSuccessResponse> => {
  const response = await Api.post<LoginSuccessResponse>('login', data);
  return response.data;
};

export const signUp = async (data: SignUpData): Promise<void> => {
  await Api.post<void>('usuarios', data);
};

export const forgotPassword = async ({
  password,
  userName,
}: ForgotPasswordData): Promise<void> => {
  const response = await Api.post('nova-senha', {
    email: 'fake@mail.com',
    login: userName,
  });
  const temporaryPassword = response.data;

  await Api.post(`altera-senha?senhaTemporaria=${temporaryPassword}`, {
    usuario: userName,
    senha: password,
  });
};
