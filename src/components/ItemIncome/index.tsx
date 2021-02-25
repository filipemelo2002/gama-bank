import React from 'react';
import { Container } from './style';
import { HiOutlinePlusCircle } from 'react-icons/hi';

interface IItemIncomeProps {
  description: string;
}

const ItemInconme: React.FC<IItemIncomeProps> = ({
  description,
}: IItemIncomeProps) => {
  return (
    <Container>
      <HiOutlinePlusCircle color="#0000FF" size={25} />
      <div>
        <strong>{description}</strong>
        <p>Receita</p>
      </div>
    </Container>
  );
};

export default ItemInconme;
