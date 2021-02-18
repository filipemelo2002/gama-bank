import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from "../../img/logo.png";
// import { Container } from './styles';

import {RecoveryPage} from "./style"

const RecoveryPass: React.FC = () => {
  return (
    <RecoveryPage>
      <Link to="/">
        <img className="logo-gama" src={Logo} alt=""/>
      </Link>
      <div className="recoveryPass-div">
        <h4>
          Esqueci minha senha
        </h4>
        <p>
        Confirme seu CPF e escolha sua nova senha.
        </p>
        <form action="">
          <input type="text" placeholder="Confirme seu CPF"/>
          <input type="text" placeholder="Digite sua nova senha"/>
          <input type="password" placeholder="Confirme sua nova senha"/>
          <button>
            Redefinir senha
            <FiArrowRight size={26} />
          </button>
        </form>
        <Link to="/">
          Ainda não sou cliente
        </Link>
      </div>
    </RecoveryPage>
  );
}

export default RecoveryPass;