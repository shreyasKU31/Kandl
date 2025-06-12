import NavLogo from "./NavLogo";
import NavElements from "./NavElements";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 border-b-2 border-gray-200 bg-white z-10 py-2">
      <nav className="lg:max-w-5xl m-auto flex justify-between items-center px-5 pb-1 mt-2 ">
        <NavLogo />
        <NavElements />
      </nav>
    </div>
  );
};

export default Navbar;
