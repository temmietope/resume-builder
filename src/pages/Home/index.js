import React from "react";
import * as ROUTES from "../../routing/routes";
import { Link } from "react-router-dom";
import * as Styles from "../../styles/homeStyle";

const Home = () => {
  return (
    <Styles.HomeWrapper>
      <Link to={ROUTES.DASHBOARD}>
        <Styles.DashboardLink>Try for Free</Styles.DashboardLink>
      </Link>
    </Styles.HomeWrapper>
  );
};

export default Home;
