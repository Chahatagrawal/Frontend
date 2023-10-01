import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./Navlinks";

import "./MainNav.css";

const MainNav = (props) => {
  return (
    <MainHeader>
      <h1 className="mainnav-title">
        <Link to="/">Pic🎆Pot</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNav;
