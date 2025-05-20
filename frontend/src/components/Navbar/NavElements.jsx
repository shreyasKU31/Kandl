import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavElements = () => {
  const [ismobile, setisMobile] = useState(false);
  const handleMobile = () => {
    setisMobile(!ismobile);
  };
  return (
    <div>
      {/* Desktop Menu */}
      <ul className="w-fit flex gap-4 max-md:hidden">
        <li className="li">Signup</li>
        <li className="li">Products</li>
        <li className="li">About</li>
        <li className="li">Pricing</li>
        <li className="li">Support</li>
      </ul>

      {/* Mobile Menu */}
      <button onClick={handleMobile} className="md:hidden">
        <MenuIcon />
      </button>
      {ismobile && (
        <ul className="flex flex-col absolute top-20 left-0 w-full text-center">
          <li className="liMobile">Signup</li>
          <li className="liMobile">Products</li>
          <li className="liMobile">About</li>
          <li className="liMobile">Pricing</li>
          <li className="liMobile">Support</li>
        </ul>
      )}
    </div>
  );
};

export default NavElements;
