import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../img/logo.png";
import { LoginPage } from "./style";

import api from "../../services/api";

const Login: React.FC = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function loginSys(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postData = {
      usuario: login,
      senha: password,
    };

    api.post(`login`, postData).then((response) => {
      console.log(response.data);
      localStorage.setItem("@tokenApp", response.data.token);
      //history.push('/dashboard')
    });
  }

  return (
    <LoginPage>
      <Link to="/">
        <img className="logo-gama" src={Logo} alt="" />
      </Link>
      <div className="login-div">
        <div>
          <h4>Faça seu Login</h4>
        </div>
        <form onSubmit={loginSys}>
          <input
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            type="text"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <button type="submit">Logar</button>
        </form>
        <Link to="/recoveryPass">Esqueci minha senha</Link>
        <Link to="/">Ainda não sou cliente</Link>
      </div>
    </LoginPage>
  );
};

export default Login;
