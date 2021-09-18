import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';
import validateEmail from '@/utils/validateEmail';

const Name = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    name: string().required('Por favor informe seu nome'),
    lastName: string().required('Por favor informe seu sobrenome'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      name: loginData.name,
      lastName: loginData.lastName,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [redirectTo, setRedirectTo] = useState('');

  const nextStep = (): void => {
    const isEmail = validateEmail(loginData.username);
    const pathname = isEmail
      ? '/cadastro/cliente/telefone'
      : '/cadastro/cliente/email';
    if (isEmail) {
      dispatch(
        Actions.setLoginData({
          ...loginData,
          email: loginData.username,
        }),
      );
    } else {
      dispatch(
        Actions.setLoginData({
          ...loginData,
          phone: loginData.username,
        }),
      );
    }
    history.push({
      pathname,
    });
  };

  useEffect((): any => {
    if (!loginData.username) {
      setRedirectTo('/login');
    }
  }, [loginData.username]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleSubmit(nextStep)} className="login">
      <div className="inner">
        <h1 className="title">
          Vamos criar o seu cadastro? Primeiro, informe o seu <b>nome</b>.
        </h1>
        <Input
          label="Nome"
          name="name"
          error={!!errors.name}
          helperText={errors?.name?.message}
          inputRef={register}
          autoCapitalize="words"
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                name: e.target.value,
              }),
            )
          }
        />
        <Input
          label="Sobrenome"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          inputRef={register}
          autoCapitalize="words"
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                lastName: e.target.value,
              }),
            )
          }
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
export default Name;
