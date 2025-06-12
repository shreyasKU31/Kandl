import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
          <Link to="/signup"> Signup</Link>
        </li>
        <li className="li">
          <Link to="/about"> About</Link>
        </li>
        <li className="li">
          <Link to="/product"> Products</Link>
        </li>
        <li className="li">
          <Link to="/pricing"> Pricing</Link>
        </li>
        <li className="li">
          <Link to="/support"> Support</Link>
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
