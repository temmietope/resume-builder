import React from "react";
import { NavLink } from "react-router-dom";
import * as Styles from "../styles/layoutStyle";
import * as ROUTES from "../routing/routes";

const Sidebar = ({match}) => {
    console.log(match.url)
  return (
    <Styles.SidebarWrapper>
      <NavLink to={`${match.path}${ROUTES.CONTENT}`}>Content</NavLink>
      <NavLink to={`${match.path}${ROUTES.DESIGN}`}>Design</NavLink>
      <NavLink to={`${match.path}${ROUTES.CONTENT}`}>Complete</NavLink>
    </Styles.SidebarWrapper>
  );
};

export default Sidebar;
