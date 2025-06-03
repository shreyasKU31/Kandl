import Button from "./Buttons/Button";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="text-center mb-25">
      <h2 className="text-3xl font-medium mb-4">Open a Kandl account</h2>
      <p className="mb-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link to="/signup">
        <Button text={"Sign up for free"} />
      </Link>
    </div>
  );
};

export default OpenAccount;
