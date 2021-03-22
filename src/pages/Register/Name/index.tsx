import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { RouteProps } from "react-router";

import * as Actions from "@/store/actions";
import { loginSelector } from "@/store/selectors/login";

import { Button, Input } from "@/components";

const Name = () => {
  const history = useHistory();

  const loginData = useSelector(loginSelector);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const nextStep = (): void => {
    // history.push({
    //   pathname: "/login/senha",
    //   state: {
    //     username,
    //   },
    // });
  };

  useEffect((): any => {
    if (!loginData.username) {
      setRedirectTo("/login");
    }
  }, []);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  const formIsValid = (): boolean => {
    return true;
  };

  return (
    <>
      <div className="login">
        <div className="inner">
          <h1 className="title">
            Vamos criar o seu cadastro? Primeiro, informe o seu <b>nome</b>.
          </h1>
          <Input
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Nome"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <Button
          color="primary"
          onClick={() => nextStep()}
          disabled={!formIsValid}
        >
          Próximo Passo
        </Button>
      </div>
    </>
  );
};
export default Name;
