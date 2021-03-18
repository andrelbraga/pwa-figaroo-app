import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {GuestLayout} from '@/layouts';
import {LoginUsername} from "@/pages";

//import { NotFound } from '@/presentation/pages/helpers'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        
        
        {/*ALWAYS LAST ROUTE BEFORE 404*/}
        <Route exact component={GuestLayout} />
        {/*<Route path={'*'} component={NotFound} />*/}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
