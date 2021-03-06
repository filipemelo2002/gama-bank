import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import {
  HomePage,
  InfoPage,
  AnnuityPage,
  ComplexityPage,
  InvitePage,
} from './style';
import Logo from '../../img/logo.png';
import GamabankAppImg from '../../img/gamabank-app.png';
import * as Api from '../../api/auth';
import { maskCPF } from '../../utils/masks';
import { showError } from '../../services/ShowToast';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const history = useHistory();

  async function createAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    if (cpf === '' || name === '' || userName === '' || password === '') {
      showError('Preencha todos os campos!');
      return;
    }

    if (password !== confirmPass) {
      showError('Senhas não coincidem.');
      return;
    }

    const postData = {
      cpf: cpf.replace(/[^0-9]/g, ''),
      nome: name,
      login: userName,
      senha: password,
    };

    try {
      await Api.signUp(postData);
      setLoading(false);
      history.push('/login');
    } catch (err) {
      showError(err);
      setLoading(false);
    }
  }

  function handleMask(value: string) {
    setCpf(maskCPF(value));
  }

  return (
    <>
      <HomePage>
        <Link to="/">
          <img className="logo-gama" src={Logo} alt="" />
        </Link>
        <div className="middle-div">
          <div className="access-div">
            <h2>Gama Bank é um projeto de nossos alunos.</h2>
            <h2>Já tem conta?</h2>
            <Link to="/login">
              Acessar
              <FiArrowRight size={26} color="#8C52E5" />
            </Link>
          </div>
          <div className="signup-div">
            <div>
              <h4>Peça sua conta e cartão de crédito Gama Bank</h4>
            </div>
            <form onSubmit={createAccount}>
              <input
                type="text"
                value={cpf}
                onChange={e => {
                  handleMask(e.target.value);
                }}
                placeholder="Digite seu CPF"
                maxLength={14}
              />
              <input
                type="text"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
                placeholder="Nome completo"
              />
              <input
                type="text"
                value={userName}
                onChange={e => {
                  setUserName(e.target.value);
                }}
                placeholder="Nome do usuário"
                maxLength={20}
              />
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                placeholder="Digite sua senha"
              />
              <input
                type="password"
                value={confirmPass}
                onChange={e => {
                  setConfirmPass(e.target.value);
                }}
                placeholder="Confirme sua senha"
              />
              <button type="submit" style={loading ? { display: 'none' } : {}}>
                Continuar
                <FiArrowRight size={29} color="#9B9B9B" />
              </button>
              <Loading isVisible={loading} />
            </form>
          </div>
        </div>
      </HomePage>
      <InfoPage>
        <div>
          <section className="left">
            <h2>Conta digital do Gama Academy</h2>
            <div>
              <p>Rende mais que a poupança,</p>
              <p>sem taxa de manutenção</p>
              <p>nem tarifas escondidas.</p>
            </div>
          </section>
          <section className="right">
            <h2>Cartão de Crédito</h2>
            <div>
              <p>Rende mais que a poupança,</p>
              <p>sem taxa de manutenção</p>
              <p>nem tarifas escondidas.</p>
            </div>
          </section>
        </div>
      </InfoPage>
      <AnnuityPage>
        <div>
          <h2>Zero anuidade</h2>
          <h4>
            Burocracia custa caro. Somos eficientes para você não ter que pagar
            tarifas.
          </h4>
        </div>
        <span>0,00</span>
      </AnnuityPage>
      <ComplexityPage>
        <div>
          <h2>O fim da complexidade</h2>
          <h4>
            Para quem sabe que tecnologia e design são melhores do que agências
            e papelada.
          </h4>
        </div>
      </ComplexityPage>
      <InvitePage>
        <div>
          <h2>Simplifique a sua vida. Peça seu convite.</h2>
          <div>
            <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>
            <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP</p>
            <p>
              Este é um projeto de avaliação | GamaAcademy | Accenture | 2021
            </p>
          </div>
        </div>
        <img src={GamabankAppImg} alt="GamaBank App" />
      </InvitePage>
    </>
  );
};

export default Home;
