import { useState } from "react";
import { positions } from "../../../data/data";
import Position from "./Position";

const Positions = () => {
  const [price, setPrice] = useState(false);
  const handleView = () => setPrice(!price);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium py-2 mb-8 border-b-2">Positions</h2>
      </div>
      <div className="positions font-medium">
        <p className="text-left">Ticker Name</p>
        <p>Product</p>
        <p>Quantity</p>
        <p className="max-lg:hidden">Average Price</p>
        <p className="max-lg:hidden">Invested Amount</p>
        <p className="hover:cursor-pointer max-lg:hidden" onClick={handleView}>
          {price ? "Net Returns" : "Net Amount"}
        </p>
        <p>Live Price</p>
        <p>1day Returns</p>
      </div>
      {positions.map((position, id) => (
        <Position position={position} id={id} price={price} />
      ))}
    </div>
  );
};

export default Positions;
