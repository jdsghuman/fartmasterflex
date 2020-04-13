import React from "react";
import layoutStyles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles["container-fluid"]}>
      <div className={layoutStyles["container-main"]}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
