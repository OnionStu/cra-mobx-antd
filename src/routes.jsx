import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./modules/layout";
import Dashboard from './modules/dashboard';
import paths from './common/paths';

export default (
  <div className="router-container">
    <Switch>
      {/* <Route exact path="/login" component={LoginPage}></Route> */}
      <Layout>
        <Switch>
          <Redirect exact from="/" to={paths.dashboard}></Redirect>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Layout>
    </Switch>
  </div>
);
