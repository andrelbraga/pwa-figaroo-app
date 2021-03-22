import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteProps } from "react-router";
import { useHistory, Redirect, useLocation } from "react-router-dom";

import * as Actions from "@/store/actions";
import { loginSelector } from "@/store/selectors/login";

import { Button, InputPassword } from "@/components";

import "./styles.scss";

interface Location {
  location: RouteProps["location"];
  username: string;
}

const Password = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loginData = useSelector(loginSelector);

  const [redirectTo, setRedirectTo] = useState("");

  const location = useLocation<Location>();

  const doLogin = () => {
    console.log("can do login");
  };

  useEffect((): any => {
    if (!loginData.username) {
      setRedirectTo("/login");
    }
  }, []);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <>
      <div className="login">
        <div className="inner">
          <h1 className="title">
            Legal te ver por aqui, username! Informe a sua <b>senha</b>.
          </h1>
          <InputPassword
            label="Senha"
            value={loginData.password}
            onChange={(e) =>
              dispatch(
                Actions.setLoginData({ ...loginData, password: e.target.value })
              )
            }
          />
          <div className="password-recovery">
            <Button
              color="primary"
              variant="text"
              onClick={() => alert("Em breve!")}
            >
              Esqueceu a senha?
            </Button>
          </div>
          <br />
        </div>

        <Button
          color="primary"
          onClick={() => doLogin()}
          disabled={!loginData.password}
        >
          Entrar
        </Button>
      </div>
    </>
  );
};
export default Password;
