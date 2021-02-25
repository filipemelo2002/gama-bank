import Api from '.';

export const loadData = async ({
  fim,
  inicio,
  login,
}: IDashboardQueryData): Promise<IAccountData> => {
  const response = await Api.get<IAccountData>('dashboard', {
    params: {
      fim,
      inicio,
      login,
    },
  });
  return response.data;
};
