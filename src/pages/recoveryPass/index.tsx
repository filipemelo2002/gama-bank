import React, { FormEvent, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api';
import Loading from '../../components/Loading';
import Logo from '../../img/logo.png';
import { showError, showSuccess } from '../../services/ShowToast';
// import { Container } from './styles';

import { RecoveryPage } from './style';

const RecoveryPass: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (userName === '' || password === '') {
      showError('Preencha todos os campos!');
      return;
    }

    if (password !== passwordConfirm) {
      showError('Senhas não coincidem.');
      return;
    }

    try {
      const response = await api.post('nova-senha', {
        email: 'fake@mail.com',
        login: userName,
      });
      const temporaryPassword = response.data;

      await api.post(`altera-senha?senhaTemporaria=${temporaryPassword}`, {
        usuario: userName,
        senha: password,
      });

      showSuccess('Senha alterada com sucesso!');
      setLoading(false);
      history.push('/login');
    } catch (err) {
      showError(`Ocorreu um erro: ${err}`);
      setLoading(false);
    }
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
