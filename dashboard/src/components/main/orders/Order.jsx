const Order = ({ order, id }) => {
  return (
    <div key={id} className="order">
      <p className="text-left">{order.name}</p>
      <p>{order.qty}</p>
      <p>{order.price}</p>
      <p>{order.type}</p>
    </div>
  );
};

export default Order;
