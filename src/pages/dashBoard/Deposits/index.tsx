import React from 'react';
import { Row, Container, Card, CardHeader } from './style';

import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import PlanSelect from '../../../components/PlanSelect';
import { useSelector } from 'react-redux';
import Logout from '../../../components/LogoutButton';

const Deposits: React.FC = () => {
  const { nome } = useSelector((state: State) => state.auth.usuario);
  return (
    <Container>
      <header>
        <span>Olá {nome}, faça seus depositos</span>
        <Logout />
      </header>
      <Card>
        <CardHeader>
          <HiOutlineCurrencyDollar size={38} color="#9B9B9B" />
          <h1>Depositar</h1>
        </CardHeader>

        <form action="">
          <Row>
            <input type="text" placeholder="Descrição" />
            <PlanSelect />
          </Row>
          <Row>
            <input type="text" placeholder="R$ 450,00" />
            <button type="submit">Depositar</button>
          </Row>
        </form>
      </Card>
    </Container>
  );
};

export default Deposits;
