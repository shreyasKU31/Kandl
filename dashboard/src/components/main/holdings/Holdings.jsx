import { useState } from "react";
import { holdings } from "../../../data/data";

const Holdings = () => {
  const [price, setPrice] = useState(false);

  const handleView = () => setPrice(!price);
  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium py-2 mb-8 border-b-2">Holdings</h2>
      </div>
      <div className="holdings font-medium">
        <p className="text-left">Ticker Name</p>
        <p>Quantity</p>
        <p className="max-lg:hidden">Average Price</p>
        <p className="max-lg:hidden">Total Price</p>
        <p className="hover:cursor-pointer" onClick={handleView}>
          {price ? "Net Returns" : "Net Amount"}
        </p>
        <p>Live Price</p>
        <p>1day Returns</p>
      </div>
      {holdings.map((holding, id) => {
        let totalPrice = holding.qty * holding.avg;
        let totalInvested =
          totalPrice + (totalPrice * parseInt(holding.net)) / 100;
        return (
          <div key={id} className="holdings">
            <p className="text-left">{holding.name}</p>
            <p>{holding.qty}</p>
            <p className="max-lg:hidden">₹{holding.avg}</p>
            <p>₹{holding.qty * holding.avg}</p>
            <p
              className={
                holding.price < holding.avg
                  ? "text-red-400 max-lg:hidden"
                  : "text-green-500 max-lg:hidden"
              }
            >
              {price ? holding.net : `₹${totalInvested}`}
            </p>
            <p
              className={
                holding.price < holding.avg ? "text-red-400" : "text-green-500"
              }
            >
              ₹{holding.price}
            </p>

            <p className={holding.day < 0 ? "text-red-400" : "text-green-500"}>
              {holding.day}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Holdings;
