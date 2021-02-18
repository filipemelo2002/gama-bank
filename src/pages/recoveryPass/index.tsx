import React from 'react';
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
      <div>
        <h4>
          Esqueci minha senha
        </h4>
        <p>
        Confirme seu seu nome de usuário e email. Em seguida você receberá uma senha provisória
        </p>
      </div>
      <form action="">
        <input type="text" placeholder="Seu nome de usuario"/>
        <input type="password" placeholder="Seu email cadastrado"/>
        <button>Redefinir senha</button>
      </form>
      <Link to="/">
        Ainda não sou cliente
      </Link>
    </RecoveryPage>
  );
}

export default RecoveryPass;