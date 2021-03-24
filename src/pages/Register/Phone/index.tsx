import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';

const Phone = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    phone: string().required('Por favor informe seu telefone'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      phone: loginData.phone,
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
          {loginData.name}, qual é o seu <b>telefone</b>?
        </h1>
        <Input
          label="Telefone"
          name="phone"
          error={!!errors.phone}
          helperText={errors?.phone?.message}
          inputRef={register}
          autoCapitalize="words"
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                phone: e.target.value,
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
export default Phone;
