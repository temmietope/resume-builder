import React from "react";
import Sidebar from "./sidebar";
import * as Styles from '../styles/layoutStyle'

const Layout = ({ children }) => {
  return (
    <Styles.LayoutWrapper>
      <Sidebar />
      <Styles.LayoutChild>
      {children}
      </Styles.LayoutChild>
    </Styles.LayoutWrapper>
  );
};

export default Layout;
