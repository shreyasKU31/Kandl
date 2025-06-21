import { holdings } from "../../../data/data";
import MainHeading from "../Others/MainHeading";

const Home = () => {
  /**
   * Calculates total investment value, total returns, and average return percentage
   * from a list of holding items.
   *
   * @typedef {Object} Holding
   * @property {number} qty - Quantity of the asset held.
   * @property {number} avg - Average purchase price of the asset.
   * @property {string|number} net - Net return percentage (as a string or number).
   *
   * @param {Holding[]} holdings - Array of holding objects.
   */

  let totalPrice = 0; // Total investment value
  let avgReturns = 0; // Average return percentage across all holdings
  let totalReturnAmount = 0; // Total amount including returns

  // Loop through each holding to calculate financial metrics
  holdings.map((item) => {
    const price = item.qty * item.avg; // Total invested for this holding
    totalPrice += price;

    let returnsAmount = 0;
    // Calculate return amount: price + (price * net return %)
    returnsAmount = price + (price * parseInt(item.net)) / 100;
    totalReturnAmount += returnsAmount;

    // Accumulate average return percentage
    avgReturns += parseInt(item.net) / holdings.length;
  });
  return (
    <div>
      <MainHeading text={"Home"} />
      <div className="grid grid-cols-1 gap-4 p-4">
        <div className="static-glass">
          <h3 className="text-2xl mb-4 pt-2">Investment</h3>
          <div className="flex items-center gap-2">
            <p className="text-2xl flex justify-center">
              Returns :
              <span
                className={`text-3xl font-medium ml-4 ${
                  avgReturns > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                &#8377;{totalReturnAmount}
              </span>
            </p>
            <p
              className={`${
                avgReturns > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              ({avgReturns}%)
            </p>
          </div>
          <p>
            P/L Amount :
            <span
              className={`${
                avgReturns > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              &#8377;{(totalReturnAmount - totalPrice).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Total investment value

// Current value

// Profit/Loss with green/red indicators

// Pie chart or small graph (optional)
