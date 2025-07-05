import { useState, useEffect } from "react";
import Holding from "./Holding";
import axios from "axios";

const Holdings = () => {
  const [price, setPrice] = useState(false);
  const handleView = () => setPrice(!price);

  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/holdings").then((res) => {
      setHoldings(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium py-2 mb-8 border-b-2">Holdings</h2>
      </div>
      <div className="holdings font-medium">
        <p className="text-left">Ticker Name</p>
        <p>Quantity</p>
        <p className="max-lg:hidden">Average Price</p>
        <p className="max-lg:hidden">Invested Amount</p>
        <p className="hover:cursor-pointer" onClick={handleView}>
          {price ? "Net Returns" : "Net Amount"}
        </p>
        <p>Live Price</p>
        <p>1day Returns</p>
      </div>
      {holdings.map((holding, id) => (
        <Holding key={id} holding={holding} id={id} price={price} />
      ))}
    </div>
  );
};

export default Holdings;
