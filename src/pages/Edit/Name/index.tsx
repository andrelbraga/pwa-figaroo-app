import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input, Navigator } from '@/components';

import './styles.scss';

const Name = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    name: string().required('Por favor informe seu nome'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      name: loginData.name,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [redirectTo, setRedirectTo] = useState('');

  const nextStep = (): void => {
    // console.log('vai fazer o submit');
  };

  useEffect((): any => {
    // if (!loginData.username) {
    //   setRedirectTo('/login');
    // }
  }, [loginData.username]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <>
      <div className="edit-profile">
        <Navigator title="Editar nome" onClick={() => history.goBack()} />

        <form onSubmit={handleSubmit(nextStep)} className="form">
          <div className="inner">
            <h1 className="title">Altere o seu nome</h1>
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
          </div>

          <Button color="primary" type="submit" disabled={!formState.isValid}>
            Confirmar
          </Button>
        </form>
      </div>
    </>
  );
};
export default Name;
