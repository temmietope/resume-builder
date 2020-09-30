import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./routing/routes";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
    </Switch>
  );
}

export default App;
