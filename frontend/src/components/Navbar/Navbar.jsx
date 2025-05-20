import React from "react";
import NavLogo from "./NavLogo";
import NavElements from "./NavElements";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <NavLogo />
      <NavElements />
    </nav>
  );
};

export default Navbar;
