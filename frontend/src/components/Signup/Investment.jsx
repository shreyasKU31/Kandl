import assets from "../../assets/assets";
import Button from "../Buttons/Button";

const Investment = () => {
  return (
    <div className="mt-20 flex flex-col items-center mb-20">
      <h2 className="text-4xl mb-20 text-center">
        Investment options with Zerodha demat account
      </h2>
      <div className="grid grid-cols-2 gap-10 mb-8 m-auto">
        <div className="flex items-center gap-8">
          <img src={assets.acopBenefits} alt="" className="w-45" />
          <div className="">
            <h3 className="text-3xl mb-2">Stocks</h3>
            <p>Invest in all exchange-listed securities</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img src={assets.mfAcop} alt="" className="w-45" />
          <div>
            <h3 className="text-3xl mb-2">Mutual funds</h3>
            <p>Invest in commission-free direct mutual funds</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img src={assets.ipoAcop} alt="" className="w-45" />
          <div>
            <h3 className="text-3xl mb-2">IPO</h3>
            <p>Apply to the latest IPOs instantly via UPI</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img src={assets.foAcop} alt="" className="w-45" />
          <div>
            <h3 className="text-3xl mb-2">Futures & options</h3>
            <p>Hedge and mitigate market risk through simplified F&O trading</p>
          </div>
        </div>
      </div>
      <button className="bg-green-400 font-medium rounded text-white py-2 px-8 text-lg transition duration-250 hover:bg-black">
        Explore Investment
      </button>
    </div>
  );
};

export default Investment;
