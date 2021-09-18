import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validateCPF, validateCNPJ } from 'validations-br';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input } from '@/components';
import documentMask from '@/masks/Document';
import './styles.scss';

const Document = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    document: string().required('Por favor informe seu documento'),
  });

  const loginData = useSelector(loginSelector);
  const [redirectTo, setRedirectTo] = useState('');

  const { register, handleSubmit, errors, formState, setError } = useForm({
    defaultValues: {
      document: loginData.document,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const nextStep = (): void => {
    history.push({
      pathname: '/cadastro/cliente/senha',
    });
  };

  const validateDocument = (document: string): void => {
    const isValid =
      document.length <= 14 ? validateCPF(document) : validateCNPJ(document);

    if (!isValid) {
      setError('document', {
        message: `Por favor informe um ${
          document.length > 14 ? 'CNPJ' : 'CPF'
        } válido`,
      });
    }
  };

  useEffect((): any => {
    if (!loginData.phone || !loginData.email) {
      setRedirectTo('/login');
    }
  }, [loginData.phone, loginData.email]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleSubmit(nextStep)} className="login">
      <div className="inner">
        <h1 className="title">
          Informe o seu <b>CPF/CNPJ.</b>
        </h1>
        <Input
          label="CPF/CNPJ"
          name="document"
          type="text"
          maxLength={18}
          mask={documentMask}
          error={!!errors.document}
          helperText={errors?.document?.message}
          inputRef={register}
          onChange={e => {
            validateDocument(e.target.value);
            dispatch(
              Actions.setLoginData({
                ...loginData,
                document: e.target.value,
              }),
            );
          }}
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
export default Document;
