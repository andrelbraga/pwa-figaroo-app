import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, array, number } from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import api from '@/services/api';

import * as Actions from '@/store/actions';
import { loginSelector } from '@/store/selectors/login';

import { Button, Input, Multiselect } from '@/components';

const Skills = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = object().shape({
    yearsBusiness: number()
      .required('Por favor informe os anos de experiência')
      .typeError('Por favor informe um número válido'),
    skills: array().required('Por favor informe suas especialidades'),
  });

  const loginData = useSelector(loginSelector);

  const { register, handleSubmit, errors, formState, control } = useForm({
    defaultValues: {
      yearsBusiness: loginData.yearsBusiness,
      skills: loginData.skills,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [redirectTo, setRedirectTo] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const nextStep = (): void => {
    history.push({
      pathname: '/cadastro/barbeiro/senha',
    });
  };

  useEffect(() => {
    api.get('skill').then(({ data }) => {
      setSkillsList(data);
    });
  }, []);

  const onChangeSelect = (e: any) => {
    dispatch(
      Actions.setLoginData({
        ...loginData,
        skills: e.target.value,
      }),
    );
  };

  useEffect((): any => {
    if (!loginData.birthdate) {
      setRedirectTo('/login');
    }
  }, [loginData.birthdate]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleSubmit(nextStep)} className="login">
      <div className="inner">
        <h1 className="title">
          Agora, precisamos de algumas <b>informações profissionais.</b>
        </h1>
        <Input
          label="Anos de experiência"
          name="yearsBusiness"
          type="text"
          error={!!errors.yearsBusiness}
          helperText={errors?.yearsBusiness?.message}
          inputRef={register}
          autoCapitalize="words"
          onChange={e =>
            dispatch(
              Actions.setLoginData({
                ...loginData,
                yearsBusiness: e.target.value,
              }),
            )
          }
        />
        <Controller
          name="skills"
          control={control}
          defaultValue={loginData.skills}
          render={({ field }: any) => (
            <Multiselect
              {...field}
              name="skills"
              error={!!errors.skills}
              helperText={errors?.skills?.message}
              options={skillsList}
              defaultValue={loginData.skills}
              onChange={onChangeSelect}
            />
          )}
        />
      </div>

      <Button
        color="primary"
        onClick={() => nextStep()}
        disabled={!formState.isValid || loginData.skills.length === 0}
      >
        Próximo Passo
      </Button>
    </form>
  );
};
export default Skills;
