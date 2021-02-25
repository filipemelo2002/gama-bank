import React from 'react';
import { Container } from './style';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const ItemInconme: React.FC = () => {
  return (
    <Container>
      <HiOutlinePlusCircle color="#0000FF" size={25} />
      <div>
        <strong>Salário</strong>
        <p>Receita</p>
      </div>
    </Container>
  );
};

export default ItemInconme;
