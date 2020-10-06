import React from "react";
import { NavLink } from "react-router-dom";
import * as Styles from "../styles/layoutStyle";
import * as ROUTES from "../routing/routes";

const Sidebar = ({ match }) => {
  console.log(match.url);
  return (
    <Styles.SidebarWrapper>
      <NavLink to={`${match.path}${ROUTES.CONTENT}`} className="navlink" activeClassName="navlink-active">Content</NavLink>
      <NavLink to={`${match.path}${ROUTES.DESIGN}`} className="navlink" activeClassName="navlink-active">Design</NavLink>
      <NavLink to={`${match.path}${ROUTES.CHECK}`} className="navlink" activeClassName="navlink-active">Complete</NavLink>
    </Styles.SidebarWrapper>
  );
};

export default Sidebar;
