import NavLogo from "./NavLogo";
import NavElements from "./NavElements";

const Navbar = () => {
  return (
    <div className="w-full fixed border-b-2 border-gray-200 bg-white z-10">
      <nav className="lg:max-w-5xl m-auto flex justify-between items-center px-5 pb-1 mt-2 ">
        <NavLogo />
        <NavElements />
      </nav>
    </div>
  );
};

export default Navbar;
