import React from 'react';
import {
  Row,
  Container,
  FirstCard,
  CardHeader,
  SecondCard,
  Link,
} from './style';

import { AiOutlineHome } from 'react-icons/ai';
import { BiDollarCircle } from 'react-icons/bi';
import { IoSearchCircleOutline } from 'react-icons/io5';
import TransactionItem from '../../../components/TransactionItem';
import { useSelector } from 'react-redux';
import Logout from '../../../components/LogoutButton';

const Transactions: React.FC = () => {
  const { nome } = useSelector((state: State) => state.auth.usuario);
  return (
    <Container>
      <header>
        <span>Olá {nome}, confira suas transações</span>
        <Link to="/dashboard/">
          <AiOutlineHome size={30} color="#8C52E5" />
        </Link>
        <Logout />
      </header>
      <FirstCard>
        <CardHeader>
          <IoSearchCircleOutline size={38} color="#9B9B9B" />
          <h1>Consultar transações</h1>
        </CardHeader>

        <form>
          <Row>
            <input
              type="text"
              placeholder="Data de início"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => e.target.value === '' && (e.target.type = 'text')}
            />
            <span>até</span>
            <input
              type="text"
              placeholder="Data de fim"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => e.target.value === '' && (e.target.type = 'text')}
            />
            <button type="submit">Buscar</button>
          </Row>
        </form>
      </FirstCard>
      <SecondCard>
        <CardHeader>
          <BiDollarCircle size={38} color="#9B9B9B" />
          <h1>Lançamentos</h1>
        </CardHeader>
        <div>
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </div>
      </SecondCard>
    </Container>
  );
};

export default Transactions;
