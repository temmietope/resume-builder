import React from "react";
import { Fragment } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Overview from "../../components/overview";
import Sidebar from "../../components/sidebar";
import * as Styles from "../../styles/dashboardStyle";
import Complete from "../Complete";
import Details from "../Details";
import Design from "../Design";

const Dashboard = ({ match }) => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  console.log(match, path);
  const components = {
    details: <Details />,
    design: <Design />,
    check: <Complete />,
  };
  return (
    <Styles.DashboardWrapper>
      <Sidebar match={match} />
      <Styles.DashboardDiv>
        {match.isExact ? (
          <Details />
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
      </Styles.DashboardDiv>
      <Overview />
    </Styles.DashboardWrapper>
  );
};

export default Dashboard;
