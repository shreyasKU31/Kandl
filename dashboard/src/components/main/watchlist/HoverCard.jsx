import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import BuyCard from "../Others/BuyCard";

const HoverCard = ({ stock }) => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [tradeType, setTradeType] = useState(null);

  const handleTradeClick = (stock, type) => {
    setSelectedStock(stock);
    setTradeType(type);
  };
  return (
    <div className="absolute bg-white w-[90%] flex justify-between">
      <div>{stock.name}</div>
      <div>
        <button
          onClick={() => handleTradeClick(stock, "buy")}
          className="mr-5 text-green-400"
        >
          <AddCircleIcon />
        </button>
        <button
          onClick={() => handleTradeClick(stock, "sell")}
          className="text-red-400"
        >
          <RemoveCircleIcon />
        </button>
      </div>
      {selectedStock && (
        <BuyCard
          stock={selectedStock}
          type={tradeType}
          onClose={() => {
            setSelectedStock(null);
            setTradeType(null);
          }}
        />
      )}
    </div>
  );
};

export default HoverCard;
