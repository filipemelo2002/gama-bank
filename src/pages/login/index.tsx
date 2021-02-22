import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import Logo from '../../img/logo.png';
import { LoginPage } from './style';

// REDUX
import * as Creators from '../../redux/action/auth';
import { useSelector, useDispatch } from 'react-redux';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: State) => state.auth);

  const history = useHistory();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = {
      usuario: login,
      senha: password,
    };
    dispatch(Creators.login(postData));
  };

  return (
    <LoginPage>
      <Link to="/">
        <img className="logo-gama" src={Logo} alt="" />
      </Link>
      <div className="login-div">
        <div>
          <h4>Faça seu Login</h4>
        </div>
        <form onSubmit={handleLogin}>
          <input
            value={login}
            onChange={e => {
              setLogin(e.target.value);
            }}
            type="text"
            placeholder="Digite seu usuário"
          />
          <input
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">
            Continuar
            <FiArrowRight size={26} color="#FFF" />
          </button>
        </form>
        <Link to="/recoveryPass">
          Esqueci minha senha
          <FiChevronRight size={13} />
        </Link>
        <Link to="/">
          Ainda não sou cliente
          <FiChevronRight size={13} />
        </Link>
      </div>
    </LoginPage>
  );
};

export default Login;
