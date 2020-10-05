import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./routing/routes";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./components/layout";
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Switch>
        <Layout>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        </Layout>
      </Switch>
    </Switch>
  );
}

export default App;
