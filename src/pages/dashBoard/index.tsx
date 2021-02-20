import React from 'react';
import { Dashboard, Option, Card, CardTitle, CardContent } from './style';
import Logo from '../../img/logoDash.png';
import { SiCashapp } from 'react-icons/si';
import { AiOutlineInteraction, AiOutlineSnippets } from 'react-icons/ai';
import { FaWallet, FaRegEye } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BsCreditCard } from 'react-icons/bs';

const DashBoard: React.FC = () => {
  return (
    <>
      <Dashboard>
        <aside>
          <img src={Logo} alt="" />
          <div className="menu">
            <Option className="depositos">
              <SiCashapp className="icon" />
              <span>Depósitos</span>
            </Option>
            <Option className="planos">
              <AiOutlineSnippets className="icon" />
              <span>Planos</span>
            </Option>
            <Option className="pagamentos">
              <FaWallet className="icon" />
              <span>Pagamentos</span>
            </Option>
            <Option className="transações">
              <AiOutlineInteraction className="icon" />
              <span>Transações</span>
            </Option>
          </div>
        </aside>
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
      </Dashboard>
    </>
  );
};

export default DashBoard;
