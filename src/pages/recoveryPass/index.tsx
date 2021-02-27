import React, { FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api';
import Loading from '../../components/Loading';
import Logo from '../../img/logo.png';
import { showError } from '../../services/ShowToast';
// import { Container } from './styles';

import { RecoveryPage } from './style';
import { useDispatch, useSelector } from 'react-redux';
import * as Creators from '../../redux/action/auth';

const RecoveryPass: React.FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { loading } = useSelector((state: State) => state.auth);
  const history = useHistory();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (userName === '' || password === '') {
      showError('Preencha todos os campos!');
      return;
    }

    if (password !== passwordConfirm) {
      showError('Senhas não coincidem.');
    }
    await dispatch(Creators.forgotPassword({ userName, password }));
    history.push('/login');
  }

  return (
    <RecoveryPage>
      <Link to="/">
        <img className="logo-gama" src={Logo} alt="" />
      </Link>
      <div className="recoveryPass-div">
        <h4>Esqueci minha senha</h4>
        <p>Confirme seu usuário e escolha uma nova senha.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Confirme seu usuário"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua nova senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirme sua nova senha"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
          <button type="submit" style={loading ? { display: 'none' } : {}}>
            Redefinir senha
            <FiArrowRight size={26} />
          </button>
          <Loading isVisible={loading} />
        </form>
        <Link to="/">Ainda não sou cliente</Link>
      </div>
    </RecoveryPage>
  );
};

export default RecoveryPass;
