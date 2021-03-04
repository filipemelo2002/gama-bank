import React, { useEffect, useMemo, useState } from 'react';

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  LoaderContainer,
  BoxVisibility,
} from './style';
import { BiDollarCircle } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import ReactLoading from 'react-loading';

import * as Creators from '../../../redux/action/dashboard';
import { toMoney } from '../../../utils/toMoney';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../../../components/LogoutButton';
import TransactionItem from '../../../components/TransactionItem';

interface ILancamentos extends ILancamentosData {
  title: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { login, nome } = useSelector((state: State) => state.auth.usuario);
  const { loading, ...account } = useSelector((state: State) => {
    return state.dashboard;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [list, setList] = useState<ILancamentos[]>([]);

  useEffect(() => {
    const now = new Date();
    const fim = now.toISOString().split('T')[0];
    now.setDate(now.getDate() - 30);
    const inicio = now.toISOString().split('T')[0];
    dispatch(Creators.loadData({ login, inicio, fim }));
  }, []);

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  useMemo(() => {
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
        return Number(new Date(b.data)) - Number(new Date(a.data));
      }),
    );
  }, [account.contaBanco.lancamentos, account.contaCredito.lancamentos]);

  return (
    <Container>
      {loading ? (
        <LoaderContainer>
          <ReactLoading type="spin" color="#FFF" width={'20%'} height={'20%'} />
        </LoaderContainer>
      ) : (
        <>
          <header>
            <span>Olá {nome}, seja bem vindo!</span>
            <div>
              <Button type="button" onClick={handleVisibility}>
                {isVisible ? (
                  <AiOutlineEye size={30} color="#8C52E5" />
                ) : (
                  <AiOutlineEyeInvisible size={30} color="#8C52E5" />
                )}
              </Button>
              <Logout />
            </div>
          </header>
          <div className="content">
            <Card>
              <CardHeader>
                <BiDollarCircle size={38} color="#9b9b9b" />
                <h1>Conta</h1>
              </CardHeader>
              <CardBody type="default">
                <span>Saldo disponível</span>
                <BoxVisibility isVisible={isVisible}>
                  <h2>{toMoney(account.contaBanco.saldo)}</h2>
                </BoxVisibility>
                <section>
                  <span>Transações</span>
                  <BoxVisibility isVisible={isVisible}>
                    <p>
                      {toMoney(
                        account.contaBanco.lancamentos
                          .reduce((acc, value) => acc + Number(value.valor), 0)
                          .toFixed(2),
                      )}
                    </p>
                  </BoxVisibility>
                </section>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <BsCreditCard size={38} color="#9b9b9b" />
                <h1>Conta Crédito</h1>
              </CardHeader>
              <CardBody type="credit">
                <span>Fatura atual</span>
                <BoxVisibility isVisible={isVisible}>
                  <h2>
                    {toMoney(Math.abs(Number(account.contaCredito.saldo)))}
                  </h2>
                </BoxVisibility>
                <section>
                  <span>Limite disponível</span>
                  <BoxVisibility isVisible={isVisible}>
                    <p>
                      {toMoney(
                        account.contaCredito.lancamentos
                          .reduce(
                            (acc, value) => acc - Math.abs(Number(value.valor)),
                            10000,
                          )
                          .toFixed(2),
                      )}
                    </p>
                  </BoxVisibility>
                </section>
              </CardBody>
            </Card>
          </div>
          <main>
            <CardHeader>
              <BiDollarCircle size={38} color="#9b9b9b" />
              <h1>Últimos lançamentos</h1>
            </CardHeader>
            <BoxVisibility isVisible={isVisible}>
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
            </BoxVisibility>
          </main>
        </>
      )}
    </Container>
  );
};

export default Home;
