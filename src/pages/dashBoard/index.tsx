import React from 'react';
import { Card, CardTitle, CardContent } from './style';

import Menu from '../../components/Menu';
import { FaRegEye } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BsCreditCard } from 'react-icons/bs';

const DashBoard: React.FC = () => {
  return (
    <>
      <Menu />
      <p className="bem-vindo">Olá usuário, seja bem vindo!</p>
      <div className="exibicao">
        <FaRegEye className="icon-eye" />
      </div>
      <Card className="conta">
        <CardTitle>
          <HiOutlineCurrencyDollar /> <p>Conta</p>
        </CardTitle>
        <CardContent>
          Saldo Disponivel
          <div className="saldo">R$:&nbsp;950.451,10</div>
          <div className="titulo">Transações</div>
          <div className="transacoes">R$:&nbsp;120,89</div>
        </CardContent>
      </Card>
      <Card className="credito">
        <CardTitle>
          <BsCreditCard /> <p>Conta&nbsp;Crédito</p>
        </CardTitle>
        <CardContent>
          Fatura Atual
          <div className="saldo saldo-credito">R$:&nbsp;400,00</div>
          <div className="titulo">Limite&nbsp;Disponivel</div>
          <div className="transacoes">R$:&nbsp;948.120,88</div>
        </CardContent>
      </Card>
      <Card className="lançamentos">
        <CardTitle>
          <HiOutlineCurrencyDollar /> <p>Últimos Lançamentos</p>
        </CardTitle>
        <CardContent>
          <BsCreditCard className="icon-compras" />
          <div className="compras">Compra no débito</div>
          <div className="compras data-compras">Dia 24 de Jan</div>
          <div className="compras tipo-compra">Gama Academy</div>
          <div className="compras valor-compra">R$:&nbsp;948.120,88</div>
        </CardContent>
      </Card>
    </>
  );
};

export default DashBoard;
