import React from 'react';

import Logo from '../../img/logoDash.png';
import { Container, Link } from './style';
import Pix from '../../img/pix.svg';

const Menu: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <div className="menu">
        <Link to="" className="option">
          <img className="icon" src={Pix} />
          <span>Depósitos</span>
        </Link>
        <Link to="" className="option">
          <img className="icon" src={Pix} />
          <span>Planos</span>
        </Link>
        <Link to="" className="option">
          <img className="icon" src={Pix} />
          <span>Pagamentos</span>
        </Link>
        <Link to="" className="option">
          <img className="icon" src={Pix} />
          <span>Transações</span>
        </Link>
      </div>
    </Container>
  );
};

export default Menu;
