import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

import {
  LoginUsername,
  LoginPassword,
  RegisterName,
  RegisterEmail,
  RegisterPhone,
  RegisterPassword,
} from '@/pages';
import { GuestLayout } from '@/layouts';

const GuestRoutes: React.FC = (): ReactElement => {
  return (
    <GuestLayout>
      <Route exact path="/login" component={LoginUsername} />
      <Route exact path="/login/senha" component={LoginPassword} />
      <Route exact path="/cadastro/nome" component={RegisterName} />
      <Route exact path="/cadastro/email" component={RegisterEmail} />
      <Route exact path="/cadastro/telefone" component={RegisterPhone} />
      <Route exact path="/cadastro/senha" component={RegisterPassword} />
    </GuestLayout>
  );
};
export default GuestRoutes;
