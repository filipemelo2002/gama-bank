import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import {
  Row,
  Container,
  FirstCard,
  CardHeader,
  SecondCard,
  CardPlan,
  Link,
} from './style';

import { HiOutlinePlusCircle } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import Sheet from '../../../img/sheet.svg';
import ItemInconme from '../../../components/ItemIncome';
import ItemExpense from '../../../components/ItemExpense';
import { useDispatch, useSelector } from 'react-redux';
import * as Creators from '../../../redux/action/planning';
import Logout from '../../../components/LogoutButton';
import { showError } from '../../../services/ShowToast';

const Planning: React.FC = () => {
  const dispatch = useDispatch();
  const { login, nome } = useSelector((state: State) => state.auth.usuario);
  const plannings = useSelector((state: State) => state.planning.plannings);
  const [plans, setPlans] = useState<Planning[] | undefined>([]);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    dispatch(Creators.loadData(login));
  }, []);

  useEffect(() => {
    setPlans(plannings);
  }, [plannings]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (description === '' || type === '') {
        showError('Por favor, preencha todos os campos');
        return;
      }

      const formData = {
        descricao: description,
        tipoMovimento: type,
        login,
      };

      dispatch(Creators.create(formData));
      dispatch(Creators.loadData(login));
      setDescription('');
    },
    [description, type],
  );

  return (
    <Container>
      <header>
        <span>Olá {nome}, adicione novos planos.</span>
        <Link to="/dashboard/">
          <AiOutlineHome size={30} color="#8C52E5" />
        </Link>
        <Logout />
      </header>
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
