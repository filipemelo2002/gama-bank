import React from 'react';

import { Container, Left, Right } from './style';
import Cards from '../../img/Cards.svg';
import { getMonthName } from '../../utils/getDate';
import { toMoney } from '../../utils/toMoney';

interface ILancamentos extends ILancamentosData {
  title: string;
}

const TransactionItem: React.FC<ILancamentos> = props => {
  const day = new Date(props.data).getUTCDate();
  const month = new Date(props.data).getUTCMonth();

  return (
    <Container>
      <Left>
        <img src={Cards} alt="cards" />
        <div>
          <strong>{props.title}</strong>
          <p>{props.descricao}</p>
          <strong style={Number(props.valor) < 0 ? { color: '#f70909' } : {}}>
            {toMoney(props.valor)}
          </strong>
        </div>
      </Left>
      <Right>
        <div>
          <span>
            Dia {day} de {getMonthName(month)}
          </span>
        </div>
      </Right>
    </Container>
  );
};

export default TransactionItem;
