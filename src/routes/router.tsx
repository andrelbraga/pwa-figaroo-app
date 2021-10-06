import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@/services/auth';
import {
  BarberServices,
  NotFound,
  Schedule,
  ScheduleSuccess,
  Home,
  Profile,
} from '@/pages';
import { EditName } from '@/pages/Edit';
import GuestRoutes from '@/routes/GuestRoutes';

// import { NotFound } from '@/presentation/pages/helpers'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  component: () => {},
  location: {},
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/agendamento/servicos" component={BarberServices} />
        <Route exact path="/agendamento/agenda" component={Schedule} />
        <Route exact path="/agendamento/sucesso" component={ScheduleSuccess} />
        <Route exact path="/perfil/nome" component={EditName} />
        <PrivateRoute exact path="/home" component={Home} />

        {/* ALWAYS LAST ROUTE BEFORE 404 */}
        <Route exact component={GuestRoutes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
