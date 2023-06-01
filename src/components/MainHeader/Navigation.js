import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../Store/auth-context";

const Navigation = () => {
const ctx =useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedin && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
