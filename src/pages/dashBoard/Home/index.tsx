import React from 'react';

import { Container, Card, CardHeader, CardBody, Button } from './style';
import { BiDollarCircle } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <span>Olá Usuário, seja bem vindo!</span>
        <Button type="button">
          <AiOutlineEyeInvisible size={30} color="#8C52E5" />
        </Button>
      </header>
      <div className="content">
        <Card>
          <CardHeader>
            <BiDollarCircle size={38} color="#9b9b9b" />
            <h1>Conta</h1>
          </CardHeader>
          <CardBody type="default">
            <span>Saldo disponível</span>
            <h2>R$ 10.000,00</h2>
            <section>
              <span>Limite disponível</span>
              <p>R$ 9.120,00</p>
            </section>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <BsCreditCard size={38} color="#9b9b9b" />
            <h1>Conta Crédito</h1>
          </CardHeader>
          <CardBody type="credit">
            <span>Saldo disponível</span>
            <h2>R$ 10.000,00</h2>
            <section>
              <span>Limite disponível</span>
              <p>R$ 9.120,00</p>
            </section>
          </CardBody>
        </Card>
      </div>
      <main>
        <CardHeader>
          <BiDollarCircle size={38} color="#9b9b9b" />
          <h1>Últimos lançamentos</h1>
        </CardHeader>
        <ul>
          <li>
            <BsCreditCard size={28} color="#9b9b9b" />
            <div>
              <h3>Compra no débito</h3>
              <span>GamaAcademy</span>
              <p>R$ 298,55</p>
            </div>
            <small>Dia 24 de Jan.</small>
          </li>
        </ul>
      </main>
    </Container>
  );
};

export default Home;
