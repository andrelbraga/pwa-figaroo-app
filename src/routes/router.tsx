import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  BarberServices,
  NotFound,
  Schedule,
  ScheduleSuccess,
  Home,
  Profile,
} from '@/pages';
import GuestRoutes from '@/routes/GuestRoutes';

// import { NotFound } from '@/presentation/pages/helpers'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/agendamento/servicos" component={BarberServices} />
        <Route exact path="/agendamento/agenda" component={Schedule} />
        <Route exact path="/agendamento/sucesso" component={ScheduleSuccess} />
        <Route exact path="/home" component={Home} />

        {/* ALWAYS LAST ROUTE BEFORE 404 */}
        <Route exact component={GuestRoutes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
