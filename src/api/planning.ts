import Api from '.';

export const loadData = async (login: string): Promise<Planning[]> => {
  const response = await Api.get<Planning[]>('lancamentos/planos-conta', {
    params: {
      login,
    },
  });
  return response.data;
};

export const create = async (data: PlanningData): Promise<void> => {
  await Api.post('lancamentos/planos-conta', data);
};
