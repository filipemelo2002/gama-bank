import React from 'react';
import { Dashboard, Button } from './style';
import Logo from '../../img/logoDash.png';
import { SiCashapp } from 'react-icons/si';
import { AiOutlineInteraction, AiOutlineSnippets } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';

const DashBoard: React.FC = () => {
  return (
    <>
      <Dashboard>
        <aside>
          <img src={Logo} alt="" />
          <div className="menu">
            <Button className="depositos">
              <SiCashapp className="icon" />
              <span>Depósitos</span>
            </Button>
            <Button className="planos">
              <AiOutlineSnippets className="icon" />
              <span>Planos</span>
            </Button>
            <Button className="pagamentos">
              <FaWallet className="icon" />
              <span>Pagamentos</span>
            </Button>
            <Button className="transações">
              <AiOutlineInteraction className="icon" />
              <span>Transações</span>
            </Button>
          </div>
        </aside>
      </Dashboard>
    </>
  );
};

export default DashBoard;
