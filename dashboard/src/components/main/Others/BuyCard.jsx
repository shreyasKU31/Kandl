import React from "react";

export default function TradeModal({ stock, type, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-2">
          {type === "buy" ? "Buy" : "Sell"} {stock.name}
        </h2>
        <p className="text-gray-600 mb-4">Market Price: ₹{stock.price}</p>

        <form className="space-y-4">
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox mr-2" />
              Intraday
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="checkbox" className="form-checkbox mr-2" />
              Delivery
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter quantity"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Order Type</label>
            <select className="w-full border rounded px-3 py-2">
              <option value="market">Market</option>
              <option value="limit">Limit</option>
              <option value="stoploss">Stop Loss</option>
            </select>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className={`px-6 py-2 rounded text-white ${
                type === "buy"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {type === "buy" ? "Buy Now" : "Sell Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
