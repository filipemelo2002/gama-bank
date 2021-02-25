import React, { useEffect, useState } from 'react';

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  LoaderContainer,
} from './style';
import { BiDollarCircle } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import ReactLoading from 'react-loading';

import api from '../../../api';
import { toMoney } from '../../../utils/toMoney';
import { getMonthName } from '../../../utils/getDate';

interface ILancamentosData {
  id: number;
  conta: number;
  data: string;
  descricao: string;
  planoConta: {
    id: number;
    descricao: string;
  };
  tipo: 'R' | 'D';
  valor: string;
}

interface IAccountData {
  contaBanco: {
    id: number;
    lancamentos: ILancamentosData[];
    saldo: string;
  };
  contaCredito: {
    id: number;
    lancamentos: ILancamentosData[];
    saldo: string;
  };
}

const Home: React.FC = () => {
  const [account, setAccount] = useState<IAccountData>({} as IAccountData);

  useEffect(() => {
    const now = new Date();
    const fim = now.toISOString().split('T')[0];
    now.setDate(now.getDate() - 30);
    const inicio = now.toISOString().split('T')[0];

    api
      .get('dashboard', {
        params: {
          fim,
          inicio,
          login: 'nelsonsantosaraujo',
        },
      })
      .then(response => {
        setAccount(response.data);
      });
  }, []);

  return (
    <Container>
      {!Object.keys(account).length ? (
        <LoaderContainer>
          <ReactLoading type="spin" color="#FFF" width={'20%'} height={'20%'} />
        </LoaderContainer>
      ) : (
        <>
          <header>
            <span>Olá Usuário, seja bem vindo!</span>
            <Button type="button">
              <AiOutlineEyeInvisible size={30} color="#8C52E5" />
            </Button>
          </header>
          <div className="content">
            <Card>
              <CardHeader>
                <BiDollarCircle size={38} color="#9b9b9b" />
                <h1>Conta</h1>
              </CardHeader>
              <CardBody type="default">
                <span>Saldo disponível</span>
                <h2>{toMoney(account.contaBanco.saldo)}</h2>
                <section>
                  <span>Limite disponível</span>
                  <p>R$ 9.120,00</p>
                </section>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <BsCreditCard size={38} color="#9b9b9b" />
                <h1>Conta Crédito</h1>
              </CardHeader>
              <CardBody type="credit">
                <span>Saldo disponível</span>
                <h2>{toMoney(account.contaCredito.saldo)}</h2>
                <section>
                  <span>Limite disponível</span>
                  <p>R$ 9.120,00</p>
                </section>
              </CardBody>
            </Card>
          </div>
          <main>
            <CardHeader>
              <BiDollarCircle size={38} color="#9b9b9b" />
              <h1>Últimos lançamentos</h1>
            </CardHeader>
            <ul>
              {account.contaBanco.lancamentos.map(lancamento => {
                const day = new Date(lancamento.data).getUTCDate();
                const month = new Date(lancamento.data).getUTCMonth();

                return (
                  <li key={lancamento.id}>
                    <BsCreditCard size={28} color="#9b9b9b" />
                    <div>
                      <h3>Compra no débito</h3>
                      <span>{lancamento.descricao}</span>
                      <p>{toMoney(lancamento.valor)}</p>
                    </div>
                    <small>
                      Dia {day} de {getMonthName(month)}
                    </small>
                  </li>
                );
              })}
              {account.contaCredito.lancamentos.map(lancamento => {
                const day = new Date(lancamento.data).getUTCDate();
                const month = new Date(lancamento.data).getUTCMonth();

                return (
                  <li key={lancamento.id}>
                    <BsCreditCard size={28} color="#9b9b9b" />
                    <div>
                      <h3>Compra no débito</h3>
                      <span>{lancamento.descricao}</span>
                      <p>{toMoney(lancamento.valor)}</p>
                    </div>
                    <small>
                      Dia {day} de {getMonthName(month)}
                    </small>
                  </li>
                );
              })}
            </ul>
          </main>
        </>
      )}
    </Container>
  );
};

export default Home;
