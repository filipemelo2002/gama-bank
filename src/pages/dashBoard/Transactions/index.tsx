import React from 'react';
import { Container, FirstCard, CardHeader, SecondCard } from './style';

import { BiDollarCircle } from 'react-icons/bi';
import TransactionItem from '../../../components/TransactionItem';
import Search from '../../../img/Search.svg';

const Transactions: React.FC = () => {
  return (
    <Container>
      <span>Olá Usuário, confira suas transações</span>
      <FirstCard>
        <img src={Search} alt="search" />
        <h1>Consultar transações</h1>

        <form action="">
          <input type="text" placeholder="21/02/2021" />
          <p>até</p>
          <input type="text" placeholder="21/02/2021" />
          <button type="submit">Buscar</button>
        </form>
      </FirstCard>
      <SecondCard>
        <CardHeader>
          <BiDollarCircle size={38} color="#9b9b9b" />
          <h1>Lançamentos</h1>
        </CardHeader>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </SecondCard>
    </Container>
  );
};

export default Transactions;
