import React from 'react';
import { Dashboard, Option } from './style';
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
      </Dashboard>
    </>
  );
};

export default DashBoard;
