import React, { ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';

const Username: React.FC = (): ReactElement => {
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
    setTimeout(() => {
      setIsLoading(false);
      history.push({
        pathname: '/login/senha',
      });
    }, 2000);
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
