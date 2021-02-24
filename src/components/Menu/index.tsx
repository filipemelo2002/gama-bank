import React from 'react';

import Logo from '../../img/logoDash.png';
import { Container, Link } from './style';
import Pix from '../../img/pix.svg';

const Menu: React.FC = () => {
  return (
    <Container>
      <Link to="/dashboard/">
        <img src={Logo} alt="" />
      </Link>
      <div className="menu">
        <Link to="/dashboard/depositos" className="option">
          <img className="icon" src={Pix} />
          <span>Depósitos</span>
        </Link>
        <Link to="/dashboard/planos" className="option">
          <img className="icon" src={Pix} />
          <span>Planos</span>
        </Link>
        <Link to="/dashboard/pagamentos" className="option">
          <img className="icon" src={Pix} />
          <span>Pagamentos</span>
        </Link>
        <Link to="/dashboard/transacoes" className="option">
          <img className="icon" src={Pix} />
          <span>Transações</span>
        </Link>
      </div>
    </Container>
  );
};

export default Menu;
