import React, {useState, useEffect} from "react";
import { RouteProps } from 'react-router';
import { useHistory, Redirect, useLocation } from 'react-router-dom';

import {Button, InputPassword} from "@/components";

import "./styles.scss";

interface Location {
  location: RouteProps['location']
  username: string
}

const Password = () => {
  const history = useHistory();

  const [redirectTo, setRedirectTo] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const location = useLocation<Location>();

  const doLogin = () => {
    console.log('can do login')
  }
  
  useEffect((): any => {
    if (!location?.state?.username) {
      setRedirectTo('/login')
    } else {
      const { username } = location.state
      setUsername(username)
    }
  }, [])
  
  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }
  
  return (
    <>
    <div className="login">
      <div className="inner">
        <h1 className="title">Legal te ver por aqui, username! Informe a sua <b>senha</b>.</h1>
        <InputPassword label="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
      </div>
      
      <Button color="primary" onClick={() => doLogin()} disabled={!password}>Entrar</Button>
    </div>
    </>
  );
};
export default Password;
