import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';

const Email = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    email: string()
      .email('E-mail inválido')
      .required('Por favor informe seu email'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      email: loginData.email,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [redirectTo, setRedirectTo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nextStep = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push({
        pathname: '/cadastro/senha',
      });
    }, 2000);
  };

  useEffect((): any => {
    if (!loginData.name) {
      setRedirectTo('/login');
    }
  }, [loginData.name]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleSubmit(nextStep)} className="login">
      <div className="inner">
        <h1 className="title">
          {loginData.name}, qual é o seu <b>E-mail</b>?
        </h1>
        <Input
          label="E-mail"
          name="email"
          type="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          inputRef={register}
          autoCapitalize="words"
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                email: e.target.value,
              }),
            )
          }
          isLoading={isLoading}
        />
      </div>

      <Button
        color="primary"
        onClick={() => nextStep()}
        disabled={!formState.isValid}
      >
        Próximo Passo
      </Button>
    </form>
  );
};
export default Email;
