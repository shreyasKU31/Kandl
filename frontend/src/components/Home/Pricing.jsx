import Links from "../Buttons/Links";
import assets from "../../assets/assets";

const Pricing = () => {
  return (
    <div>
      <div className="mb-25">
        <div>
          <h2 className="text-3xl font-medium mb-4">Unbeatable pricing</h2>
        </div>
        <div className="flex justify-between">
          <p className="mt-2 w-1/3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="flex gap-8">
            <div className="flex items-center">
              <img src={assets.pricingEq} alt="" className="w-30" />
              <span className="text-[12px] text-gray-500 w-20">
                Free account opening
              </span>
            </div>
            <div className="flex items-center">
              <img src={assets.pricingEq} alt="" className="w-30" />
              <span className="text-[12px] text-gray-500 w-25">
                Free equity delivery and direct mutual funds
              </span>
            </div>
            <div className="flex items-center">
              <img src={assets.otherTrades} alt="" className="w-30" />
              <span className="text-[12px] text-gray-500 w-25">
                Free equity delivery and direct mutual funds
              </span>
            </div>
          </div>
        </div>
        <Links text={"See our Pricing"} />
      </div>
      <div className="flex gap-20 items-center mt-4 mb-25">
        <img src={assets.indexEducation} alt="" />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-medium mb-4">
            Free and open market education
          </h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Links text={"Varsity"} />
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <Links text={"TradingQ&A"} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
