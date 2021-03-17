import React, {useState} from "react";
import { Redirect, useLocation, useHistory } from 'react-router-dom'
import { RouteProps } from 'react-router'

import {Button, Input, InputPassword} from "@/components";

import "./styles.scss";


const Username = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigateToPassword = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push({
        pathname: '/login/senha',
        state: {
          username
        }
      });
    }, 2000);
  }
  
  return (
    <>
    <div className="login">
      <div className="inner">
        <h1 className="title">Bem-vindo!<br/> Pode nos informar o seu <b>telefone</b> ou <b>e-mail</b>?</h1>
        <Input label="Telefone ou e-mail" value={username} onChange={(e) => setUsername(e.target.value)} isLoading={isLoading}/>
        <br/>
      </div>
      
      <Button color="primary" onClick={() => navigateToPassword()} disabled={!username}>Próximo Passo</Button>
    </div>
    </>
  );
};
export default Username;
