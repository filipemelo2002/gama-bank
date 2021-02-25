import React from 'react';
import { Container } from './style';
import { HiOutlineMinusCircle } from 'react-icons/hi';

interface IItemIncomeProps {
  description: string;
}

const ItemExpense: React.FC<IItemIncomeProps> = ({
  description,
}: IItemIncomeProps) => {
  return (
    <Container>
      <HiOutlineMinusCircle color="#FF0000" size={25} />
      <div>
        <strong>{description}</strong>
        <p>Despesa</p>
      </div>
    </Container>
  );
};

export default ItemExpense;
