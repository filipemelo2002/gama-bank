import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';
import Logo from "../../img/logo.png";

import { ErrorPage, Container, Content } from './style';

const Error: React.FC = () => {
  return (
    <ErrorPage>
      <Link to="/">
        <img className="logo-gama" src={Logo} alt="" />
      </Link>
      <Container>
        <Content>
          <FiAlertTriangle size={100} color="#8C52E5" />
          <p>Oops, algo deu errado!</p>
          <p>Confirme seus dados e tente novamente!</p>
          <button>
            Voltar
            <FiArrowLeft size={26} />
          </button>
        </Content>
      </Container>
    </ErrorPage> 
  );
};

export default Error;
