const Position = ({ position, id, price }) => {
  let totalPrice = position.qty * position.avg;
  let amountAfterReturns =
    totalPrice + (totalPrice * parseInt(position.net)) / 100;
  return (
    <div key={id} className="positions">
      <p className="text-left">{position.name}</p>
      <p>{position.product}</p>
      <p>{position.qty}</p>
      <p className="max-lg:hidden">₹{position.avg}</p>
      <p>₹{position.qty * position.avg}</p>
      <p
        className={
          position.price < position.avg
            ? "text-red-400 max-lg:hidden"
            : "text-green-500 max-lg:hidden"
        }
      >
        {price ? position.net : `₹${amountAfterReturns}`}
      </p>
      <p
        className={
          position.price < position.avg
            ? "text-red-400  max-lg:hidden"
            : "text-green-500 max-lg:hidden"
        }
      >
        ₹{position.price}
      </p>

      <p className={position.day < 0 ? "text-red-400" : "text-green-500"}>
        {position.day}
      </p>
    </div>
  );
};

export default Position;
