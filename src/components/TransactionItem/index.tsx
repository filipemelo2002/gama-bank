import React from 'react';

import { Container, Left, Right } from './style';
import Cards from '../../img/Cards.svg';

const TransactionItem: React.FC = () => {
  return (
    <Container>
      <Left>
        <img src={Cards} alt="cards" />
        <div>
          <strong>Compra no débito</strong>
          <p>GamaAcademy</p>
          <strong>R$: 298,55</strong>
        </div>
      </Left>
      <Right>
        <div>
          <span>Dia 24 de Jan.</span>
        </div>
      </Right>
    </Container>
  );
};

export default TransactionItem;
