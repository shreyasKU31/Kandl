const Holding = ({ holding, id, price }) => {
  let totalPrice = holding.qty * holding.avg;
  let amountAfterReturns =
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
        {price ? holding.net : `₹${amountAfterReturns}`}
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
};

export default Holding;
