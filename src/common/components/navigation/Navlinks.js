import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { LoginContext } from "../context";
import "./Navlinks.css";

const NavLinks = (props) => {
  const loggedin = useContext(LoginContext);
  return (
    <ul className="navlinks">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {loggedin.isLoggedin && (
        <li>
          <NavLink to="/user1/locations" exact>
            My Locations
          </NavLink>
        </li>
      )}
      {loggedin.isLoggedin && (
        <li>
          <NavLink to="/locations/new" exact>
            Add Location
          </NavLink>
        </li>
      )}
      {!loggedin.isLoggedin && (
        <li>
          <NavLink to="/login" exact>
            SignUp/In
          </NavLink>
        </li>
      )}
      {loggedin.isLoggedin && (
        <li>
          <button onClick={loggedin.logout}>LOG OUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
