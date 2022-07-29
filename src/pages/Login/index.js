import React from "react";

import { BrowserRouter, Link } from "react-router-dom";

import { AreaLogin } from "./styled";

import { BtnDefaultIcons, BtnDefault } from "../../components/styled";

import FacebookIcon from "@mui/icons-material/Facebook";

import GoogleIcon from "@mui/icons-material/Google";

export default () => {
  return (
    <BrowserRouter>
      <AreaLogin>
        <h1>Faça login em sua conta</h1>

        <BtnDefaultIcons>
          <FacebookIcon />
          <div className="center">Fazer login com o Facebook</div>
        </BtnDefaultIcons>

        <BtnDefaultIcons>
          <GoogleIcon />
          <div className="center">Fazer login com o Google</div>
        </BtnDefaultIcons>

        <p>OU</p>

        <form>
          <div className="form--imput">
            <label>E-mail</label>
            <input type="email" />
          </div>
        </form>

        <form>
          <div className="form--imput">
            <label>Senha</label>
            <input type="password" />
          </div>

          <BtnDefault>Entrar</BtnDefault>

          <div className="footerLogin">
            Não tem uma conta?
            <Link to="/registrar">Registre-se</Link>
          </div>
        </form>
      </AreaLogin>
    </BrowserRouter>
  );
};
