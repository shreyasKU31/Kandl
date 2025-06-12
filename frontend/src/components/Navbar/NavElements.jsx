import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const NavElements = () => {
  const [ismobile, setisMobile] = useState(false);
  const handleMobile = () => {
    setisMobile(!ismobile);
  };
  return (
    <div>
      {/* Desktop Menu */}
      <ul className="w-fit flex gap-4 max-md:hidden">
        <li className="li">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-medium" : ""
            }
          >
            Signup
          </NavLink>
        </li>
        <li className="li">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-medium" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li className="li">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-medium" : ""
            }
          >
            Products
          </NavLink>
        </li>
        <li className="li">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-medium" : ""
            }
          >
            Pricing
          </NavLink>
        </li>
        <li className="li">
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-medium" : ""
            }
          >
            Support
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu */}
      <button onClick={handleMobile} className="md:hidden">
        <MenuIcon />
      </button>
      {ismobile && (
        <ul className="flex flex-col absolute top-20 left-0 w-full text-center bg-white shadow-lg">
          <li className="liMobile">
            <Link to="/signup"> Signup</Link>
          </li>
          <li className="liMobile">
            <Link to="/products"> Products</Link>
          </li>
          <li className="liMobile">
            <Link to="/about"> About</Link>
          </li>
          <li className="liMobile">
            <Link to="/pricing"> Pricing</Link>
          </li>
          <li className="liMobile">
            <Link to="/support"> Support</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavElements;
