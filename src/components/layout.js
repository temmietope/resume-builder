import React from "react";
import Sidebar from "./sidebar";
import * as Styles from '../styles/layoutStyle'

const Layout = ({ children }) => {
  return (
    <Styles.LayoutWrapper>
      <Sidebar />
       {children}
    </Styles.LayoutWrapper>
  );
};

export default Layout;
