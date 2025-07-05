import { useState, useEffect } from "react";
import axios from "axios";
import HoverCard from "./hoverCard";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [hover, setHover] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/watchlist").then((res) => {
      setWatchlist(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium py-2 mb-8 border-b-2">Positions</h2>
      </div>
      <div className="watchlist font-medium">
        <p className="text-left">Ticker Name</p>
        <p>Average Price</p>
        <p className="hover:cursor-pointer">Today</p>
      </div>
      {watchlist.map((position, id) => (
        <div
          key={id}
          className="watchlist"
          onMouseOver={() => setHover(position)}
          onMouseOut={() => setHover({})}
        >
          <p className="text-left">{position.name}</p>
          <p
            className={
              parseFloat(position.percent) > 0
                ? "text-green-400"
                : "text-red-400"
            }
          >
            ₹{position.price}
          </p>
          <p>{position.percent}</p>
          {hover.name === position.name && <HoverCard stock={position} />}
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
