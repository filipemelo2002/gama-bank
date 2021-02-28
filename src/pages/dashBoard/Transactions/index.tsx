import React, { FormEvent, useCallback, useMemo, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../../../components/LogoutButton';
import * as Creators from '../../../redux/action/dashboard';
import { showError } from '../../../services/ShowToast';
import { getMonthName } from '../../../utils/getDate';
import { toMoney } from '../../../utils/toMoney';
import { BsCreditCard } from 'react-icons/bs';

interface ILancamentos extends ILancamentosData {
  title: string;
}

const Transactions: React.FC = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState<ILancamentos[]>([]);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const { nome, login } = useSelector((state: State) => state.auth.usuario);
  const { loading, error, ...account } = useSelector((state: State) => {
    return state.dashboard;
  });

  const loadTransactions = useCallback(() => {
    const lancamentoDebito = account.contaBanco.lancamentos.map(lancamento => {
      let title;

      if (lancamento.tipo === 'D') {
        title = 'Compra no débito';
      } else {
        title = 'Depósito';
      }

      return { ...lancamento, title };
    });

    const lancamentoCredito = account.contaCredito.lancamentos.map(
      lancamento => {
        let title;

        if (lancamento.tipo === 'D') {
          title = 'Compra no crédito';
        } else {
          title = 'Transferência';
        }

        return { ...lancamento, title };
      },
    );

    const lancamentoArray = [...lancamentoDebito, ...lancamentoCredito];

    setList(
      lancamentoArray.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return Number(new Date(b.data)) - Number(new Date(a.data));
      }),
    );
  }, [account.contaBanco.lancamentos, account.contaCredito.lancamentos]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (initialDate === '' || finalDate === '') {
        showError('Preencha corretamente as datas.');
        return;
      }

      const formattedInitialDate = new Date(initialDate)
        .toISOString()
        .split('T')[0];
      const formattedFinalDate = new Date(finalDate)
        .toISOString()
        .split('T')[0];

      dispatch(
        Creators.loadData({
          login,
          inicio: formattedInitialDate,
          fim: formattedFinalDate,
        }),
      );

      loadTransactions();
    },
    [initialDate, finalDate],
  );

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

        <form onSubmit={handleSubmit}>
          <Row>
            <input
              type="text"
              placeholder="Data de início"
              value={initialDate}
              onChange={e => setInitialDate(e.target.value)}
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => e.target.value === '' && (e.target.type = 'text')}
            />
            <span>até</span>
            <input
              type="text"
              placeholder="Data de fim"
              value={finalDate}
              onChange={e => setFinalDate(e.target.value)}
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => e.target.value === '' && (e.target.type = 'text')}
            />
            <button type="submit">Buscar</button>
          </Row>
        </form>
      </FirstCard>
      {list.length ? (
        <SecondCard>
          <CardHeader>
            <BiDollarCircle size={38} color="#9B9B9B" />
            <h1>Lançamentos</h1>
          </CardHeader>
          <div>
            {list.map(lancamento => {
              return (
                <TransactionItem
                  key={lancamento.id}
                  id={lancamento.id}
                  title={lancamento.title}
                  descricao={lancamento.descricao}
                  conta={lancamento.conta}
                  data={lancamento.data}
                  planoConta={lancamento.planoConta}
                  tipo={lancamento.tipo}
                  valor={lancamento.valor}
                />
              );
            })}
          </div>
        </SecondCard>
      ) : null}
    </Container>
  );
};

export default Transactions;
