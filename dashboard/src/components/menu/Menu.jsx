import logo from "../../assets/iconLogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Menu = () => {
  return (
    <div className="flex justify-between p-4 items-center border-b-2 border-gray-200">
      <div className="card">
        <img src={logo} alt="" className="w-16" />
      </div>
      <div className="flex gap-12 items-center">
        <div className="card">
          <span>Nifty 50</span>
          <div className="flex flex-col">
            <span className="text-green-600">₹25,000</span>
            <span className="text-green-600 text-[12px]">+187.67 (+0.7%)</span>
          </div>
        </div>
        <div className="card">
          <span>Sensex</span>
          <div className="flex flex-col">
            <span className="text-green-600">₹80,000</span>
            <span className="text-green-600 text-[12px]">+587.67 (+0.7%)</span>
          </div>
        </div>
      </div>
      <div className="card">
        <AccountCircleIcon />
        <span>User Name</span>
      </div>
    </div>
  );
};

export default Menu;
