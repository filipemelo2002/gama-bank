import React, { FormEvent, useState } from 'react';
import {
  Row,
  Container,
  FirstCard,
  CardHeader,
  LoaderContainer,
  Link,
} from './style';

import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import PlanSelect from '../../../components/PlanSelect';

import Logout from '../../../components/LogoutButton';
import { showError } from '../../../services/ShowToast';
import ReactLoading from 'react-loading';

import * as Creators from '../../../redux/action/planning';
import { AiOutlineHome } from 'react-icons/ai';
const Deposits: React.FC = () => {
  const dispatch = useDispatch();
  const [planoConta, setPlanoConta] = useState(0);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const { ...account } = useSelector((state: State) => {
    return state.dashboard;
  });
  const { nome, login } = useSelector((state: State) => state.auth.usuario);
  const [loading, setLoading] = useState(false);
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.length === 0) {
      showError('Prencha o campo de descrição');
      return 0;
    }

    if (value.length === 0) {
      showError('Preencha o campo de valor');
      return 0;
    }
    setDescription('');
    setValue('');
    setPlanoConta(0);
    setLoading(true);

    await dispatch(
      Creators.transaction({
        conta: account.contaBanco.id,
        contaDestino: login,
        data: new Date(Date.now()).toISOString().split('T')[0],
        descricao: description,
        valor: Number(value.replace('R$ ', '')),
        login,
        planoConta,
      }),
    );
    setLoading(false);
  };

  if (loading) {
    return (
      <LoaderContainer>
        <ReactLoading type="spin" color="#FFF" width={'20%'} height={'20%'} />
      </LoaderContainer>
    );
  }
  return (
    <Container>
      <header>
        <span>Olá {nome}, faça seus depósitos.</span>
        <Link to="/dashboard/">
          <AiOutlineHome size={30} color="#8C52E5" />
        </Link>
        <Logout />
      </header>
      <FirstCard>
        <CardHeader>
          <HiOutlineCurrencyDollar size={38} color="#9B9B9B" />
          <h1>Pagar</h1>
        </CardHeader>

        <form onSubmit={handleOnSubmit}>
          <Row>
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <PlanSelect
              value={planoConta}
              onChange={e => {
                setPlanoConta(Number(e.target.value));
              }}
            />
          </Row>
          <Row>
            <input
              type="text"
              className="price"
              placeholder="R$ 450,00"
              value={value}
              onChange={e => {
                const newValue =
                  e.target.value.length < 3 ? 'R$ ' : e.target.value;
                setValue(newValue);
              }}
            />
            <button type="submit">Pagar</button>
          </Row>
        </form>
      </FirstCard>
    </Container>
  );
};

export default Deposits;
