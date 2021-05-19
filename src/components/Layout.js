import React from "react";

import NavigationMenu from "./NavigationMenu.js";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationMenu />
      {children}
    </React.Fragment>
  );
};

export default Layout;
