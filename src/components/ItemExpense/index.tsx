import React from 'react';
import { Container } from './style';
import { HiOutlineMinusCircle } from 'react-icons/hi';

const ItemExpense: React.FC = () => {
  return (
    <Container>
      <HiOutlineMinusCircle color="#FF0000" size={25} />
      <div>
        <strong>Conta de luz</strong>
        <p>Despesa</p>
      </div>
    </Container>
  );
};

export default ItemExpense;
