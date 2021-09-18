import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

import {
  LoginUsername,
  LoginPassword,
  RegisterCustomerName,
  RegisterCustomerDocument,
  RegisterCustomerEmail,
  RegisterCustomerPhone,
  RegisterCustomerPassword,
  RegisterBarberName,
  RegisterBarberNickname,
  RegisterBarberPhone,
  RegisterBarberEmail,
  RegisterBarberBirthdate,
  RegisterBarberSkills,
  RegisterBarberPassword,
  RegisterBarberDocument,
} from '@/pages';
import { GuestLayout } from '@/layouts';

const GuestRoutes: React.FC = (): ReactElement => {
  return (
    <GuestLayout>
      <Route exact path="/login" component={LoginUsername} />
      <Route exact path="/login/senha" component={LoginPassword} />
      <Route
        exact
        path="/cadastro/cliente/nome"
        component={RegisterCustomerName}
      />
      <Route
        exact
        path="/cadastro/cliente/documento"
        component={RegisterCustomerDocument}
      />
      <Route
        exact
        path="/cadastro/cliente/email"
        component={RegisterCustomerEmail}
      />
      <Route
        exact
        path="/cadastro/cliente/telefone"
        component={RegisterCustomerPhone}
      />
      <Route
        exact
        path="/cadastro/cliente/senha"
        component={RegisterCustomerPassword}
      />
      <Route
        exact
        path="/cadastro/barbeiro/documento"
        component={RegisterBarberDocument}
      />
      <Route
        exact
        path="/cadastro/barbeiro/nome"
        component={RegisterBarberName}
      />
      <Route
        exact
        path="/cadastro/barbeiro/apelido"
        component={RegisterBarberNickname}
      />
      <Route
        exact
        path="/cadastro/barbeiro/telefone"
        component={RegisterBarberPhone}
      />
      <Route
        exact
        path="/cadastro/barbeiro/email"
        component={RegisterBarberEmail}
      />
      <Route
        exact
        path="/cadastro/barbeiro/data-de-nascimento"
        component={RegisterBarberBirthdate}
      />
      <Route
        exact
        path="/cadastro/barbeiro/informacoes-profissionais"
        component={RegisterBarberSkills}
      />
      <Route
        exact
        path="/cadastro/barbeiro/senha"
        component={RegisterBarberPassword}
      />
    </GuestLayout>
  );
};
export default GuestRoutes;
