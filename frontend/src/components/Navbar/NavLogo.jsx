import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div>
      <Link to="/">
        <img className="max-w-45" src={assets.fullLogo} alt="" />
      </Link>
    </div>
  );
};

export default NavLogo;
