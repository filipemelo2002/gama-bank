import React from 'react';
import { Row, Container, Card, CardHeader } from './style';

import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import PlanSelect from '../../../components/PlanSelect';

const Payments: React.FC = () => {
  return (
    <Container>
      <span>Olá Usuário, faça seus pagamentos</span>
      <Card>
        <CardHeader>
          <HiOutlineCurrencyDollar size={38} color="#9B9B9B" />
          <h1>Pagar</h1>
        </CardHeader>

        <form action="">
          <Row>
            <input type="text" placeholder="Descrição" />
            <PlanSelect />
          </Row>
          <Row>
            <input type="text" placeholder="R$ 450,00" />
            <button type="submit">Pagar</button>
          </Row>
        </form>
      </Card>
    </Container>
  );
};

export default Payments;
