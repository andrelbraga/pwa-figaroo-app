import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';

const Nickname = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    surName: string().required('Por favor informe seu apelido'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      surName: loginData.surName,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const nextStep = (): void => {
    history.push('/cadastro/barbeiro/telefone');
  };

  return (
    <form onSubmit={handleSubmit(nextStep)} className="login">
      <div className="inner">
        <h1 className="title">
          Você tem um <b>apelido</b>, {loginData.name}?
        </h1>
        <Input
          label="Apelido"
          name="surName"
          error={!!errors.surName}
          helperText={errors?.surName?.message}
          inputRef={register}
          autoCapitalize="words"
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                surName: e.target.value,
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
export default Nickname;
