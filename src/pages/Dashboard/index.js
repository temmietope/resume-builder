import React from "react";
import { Fragment } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import * as Styles from "../../styles/dashboardStyle";
import Complete from "../Complete";
import Content from "../Content";
import Design from "../Design";

const Dashboard = ({ match }) => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  console.log(match, path);
  const components = {
    content: <Content />,
    design: <Design />,
    complete: <Complete />,
  };
  return (
    <Styles.DashboardWrapper>
      <Sidebar match={match} />
      {/* <Design /> */}
      {match.isExact ? (
        <Content />
      ) : path in components ? (
        <Route
          exact
          path={`${match.path}/:name`}
          render={({ match }) => (
            <Fragment>{components[match.params.name]}</Fragment>
          )}
        />
      ) : (
        <Redirect to="/" />
      )}
    </Styles.DashboardWrapper>
  );
};

export default Dashboard;
