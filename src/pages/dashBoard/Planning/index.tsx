import React from 'react';
import { Row, Container, FirstCard, CardHeader, SecondCard } from './style';

import { HiOutlinePlusCircle } from 'react-icons/hi';
import Sheet from '../../../img/sheet.svg';
import ItemInconme from '../../../components/ItemIncome';
import ItemExpense from '../../../components/ItemExpense';

const Planning: React.FC = () => {
  return (
    <Container>
      <span>Olá Usuário, adicione novos planos</span>
      <FirstCard>
        <CardHeader>
          <HiOutlinePlusCircle size={38} color="#9B9B9B" />
          <h1>Adicionar plano</h1>
        </CardHeader>

        <form action="">
          <Row>
            <input type="text" placeholder="Descrição" />
            <select defaultValue="tipo">
              <option value="tipo" hidden>
                Tipo
              </option>
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
        <ItemInconme />
        <ItemExpense />
      </SecondCard>
    </Container>
  );
};

export default Planning;
