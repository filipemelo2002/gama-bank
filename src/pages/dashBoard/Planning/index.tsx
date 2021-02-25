import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import {
  Row,
  Container,
  FirstCard,
  CardHeader,
  SecondCard,
  CardPlan,
} from './style';

import { HiOutlinePlusCircle } from 'react-icons/hi';
import Sheet from '../../../img/sheet.svg';
import ItemInconme from '../../../components/ItemIncome';
import ItemExpense from '../../../components/ItemExpense';
import api from '../../../api';

interface IPlansData {
  id: number;
  descricao: string;
  tipoMovimento: string;
}

const Planning: React.FC = () => {
  const [plans, setPlans] = useState<IPlansData[]>([]);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    api
      .get('/lancamentos/planos-conta', {
        params: {
          login: 'nelsonsantosaraujo',
        },
      })
      .then(response => {
        setPlans(response.data);
      });
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (description === '' || type === '') {
        console.log('campos não preenchidos');
        return;
      }

      const formData = {
        descricao: description,
        tipoMovimento: type,
        login: 'nelsonsantosaraujo',
      };

      api
        .post('lancamentos/planos-conta', formData)
        .catch(err => console.log(err))
        .finally(() => {
          setDescription('');
          setType('');
        });
    },
    [description, type],
  );

  return (
    <Container>
      <span>Olá Usuário, adicione novos planos</span>
      <FirstCard>
        <CardHeader>
          <HiOutlinePlusCircle size={38} color="#9B9B9B" />
          <h1>Adicionar plano</h1>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <Row>
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="" hidden>
                Tipo
              </option>
              <option value="R">Receita</option>
              <option value="D">Despesa</option>
            </select>
            <button type="submit">Adicionar</button>
          </Row>
        </form>
      </FirstCard>
      <SecondCard>
        <CardHeader>
          <img src={Sheet} alt="sheet_icon" />
          <h1>Planos</h1>
        </CardHeader>
        <CardPlan>
          {plans &&
            plans.map(plan => (
              <div key={plan.id}>
                {plan.tipoMovimento === 'R' ? (
                  <ItemInconme description={plan.descricao} />
                ) : (
                  <ItemExpense description={plan.descricao} />
                )}
              </div>
            ))}
        </CardPlan>
      </SecondCard>
    </Container>
  );
};

export default Planning;
