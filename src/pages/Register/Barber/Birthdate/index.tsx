import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';

const Birthdate = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    birthdate: string().required('Por favor informe sua data de nascimento'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      birthdate: loginData.birthdate,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [redirectTo, setRedirectTo] = useState('');

  const nextStep = (): void => {
    history.push({
      pathname: '/cadastro/barbeiro/informacoes-profissionais',
    });
  };

  useEffect((): any => {
    if (!loginData.email) {
      setRedirectTo('/login');
    }
  }, [loginData.email]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleSubmit(nextStep)} className="login">
      <div className="inner">
        <h1 className="title">
          Qual a sua <b>Data de nascimento</b>?
        </h1>
        <Input
          label="Data Nasc."
          name="birthdate"
          type="date"
          error={!!errors.birthdate}
          helperText={errors?.birthdate?.message}
          inputRef={register}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                birthdate: e.target.value,
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
export default Birthdate;
