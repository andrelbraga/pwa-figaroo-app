import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, ref } from 'yup';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, InputPassword, Loader } from '@/components';

const Password = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    password: string()
      .required('Por favor informe sua senha')
      .min(6, 'Mínimo de 6 caracteres'),
    passwordConfirmation: string().oneOf(
      [ref('password'), null],
      'A confirmação deve ser igual a senha',
    ),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [redirectTo, setRedirectTo] = useState('');
  const [pageLoader, setPageLoader] = useState(false);

  const doRegister = (): void => {
    setPageLoader(true);
    setTimeout(() => {
      setPageLoader(false);
      history.push({
        pathname: '/home',
      });
    }, 2000);
  };

  useEffect((): any => {
    if (!loginData.email || !loginData.phone) {
      setRedirectTo('/login');
    }
  }, [loginData.email, loginData.phone]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(doRegister)} className="login">
        <div className="inner">
          <h1 className="title">
            Luciano, vamos deixar sua conta mais segura?
            <br /> Crie uma <b>senha</b>.
          </h1>
          <InputPassword
            label="Senha"
            inputRef={register}
            name="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            onChange={e =>
              dispatch(
                Actions.setLoginData({
                  ...loginData,
                  password: e.target.value.toLowerCase(),
                }),
              )
            }
          />
          <InputPassword
            label="Confirmar senha"
            inputRef={register}
            name="passwordConfirmation"
            error={!!errors.passwordConfirmation}
            helperText={errors?.passwordConfirmation?.message}
          />
        </div>

        <Button
          color="primary"
          onClick={() => doRegister()}
          disabled={!formState.isValid}
        >
          Próximo Passo
        </Button>
      </form>
      {pageLoader && <Loader />}
    </>
  );
};
export default Password;
