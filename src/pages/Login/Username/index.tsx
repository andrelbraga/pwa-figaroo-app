import React, { ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import api from '@/services/api';
import { Button, Input } from '@/components';
import validateEmail from '@/utils/validateEmail';

const Username = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    username: string().required('Por favor informe o telefone ou e-mail'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      username: loginData.username,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    let pathname = '/cadastro/cliente/nome';
    const isEmail = validateEmail(loginData.username);
    api
      .get(
        isEmail
          ? `/user/email/${loginData.username}`
          : `/user/phone/${loginData.username.replace(/\D/g, '')}`,
      )
      .then(({ data }: any) => {
        if (data?.length > 0) {
          pathname = '/login/senha';
        }

        history.push({
          pathname,
        });
      })
      .catch(err => {
        console.error('Error checking if user exists', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login">
        <div className="inner">
          <h1 className="title">
            Bem-vindo!
            <br /> Pode nos informar o seu <b>telefone</b> ou <b>e-mail</b>?
          </h1>
          <Input
            label="Telefone ou e-mail"
            error={!!errors.username}
            helperText={errors?.username?.message}
            name="username"
            inputRef={register}
            onChange={e => {
              dispatch(
                Actions.setLoginData({
                  ...loginData,
                  username: e.target.value.toLowerCase(),
                }),
              );
            }}
            isLoading={isLoading}
          />
          <br />
        </div>
        <Button color="primary" type="submit" disabled={!formState.isValid}>
          Próximo Passo
        </Button>
      </form>
    </>
  );
};
export default Username;
