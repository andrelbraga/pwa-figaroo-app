import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, InputPassword, Loader } from '@/components';

import './styles.scss';

const Password: React.FC = (): ReactElement => {
  const dispatch = useDispatch();

  const schema = object().shape({
    password: string()
      .required('Por favor informe sua senha')
      .min(6, 'Mínimo de 6 caracteres'),
  });

  const loginData = useSelector(loginSelector);

  const [redirectTo, setRedirectTo] = useState('');
  const [pageLoader, setPageLoader] = useState(false);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      password: loginData.password,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  // const doLogin = (): void => {
  //   setPageLoader(true);
  //   api
  //     .post('employe', {
  //       ...loginData,
  //     })
  //     .then(() => {
  //       setRedirectTo('/home');
  //     })
  //     .catch(err => {
  //       console.error('error', err);
  //     })
  //     .finally(() => {
  //       setPageLoader(false);
  //     });
  // };

  const doLogin = () => {
    setPageLoader(true);
    setTimeout(() => {
      setPageLoader(false);
      setRedirectTo('/home');
    }, 3000);
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
    <>
      <form onSubmit={handleSubmit(doLogin)} className="login">
        <div className="inner">
          <h1 className="title">
            Legal te ver por aqui, username! Informe a sua <b>senha</b>.
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
          <div className="password-recovery">
            <Button
              color="primary"
              variant="text"
              onClick={() => {
                /* alert('Em breve!') */
              }}
            >
              Esqueceu a senha?
            </Button>
          </div>
          <br />
        </div>

        <Button
          color="primary"
          onClick={() => doLogin()}
          disabled={!formState.isValid}
        >
          Entrar
        </Button>
      </form>
      {pageLoader && <Loader />}
    </>
  );
};
export default Password;
