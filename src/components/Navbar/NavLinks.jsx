import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ link, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "isActive" : "")}>
      {link}
    </NavLink>
  );
};

export default NavLinks;
