import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, NotFound, Schedule } from '@/pages';
import GuestRoutes from '@/routes/GuestRoutes';

// import { NotFound } from '@/presentation/pages/helpers'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* ALWAYS LAST ROUTE BEFORE 404 */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/agenda" component={Schedule} />

        <Route exact component={GuestRoutes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
