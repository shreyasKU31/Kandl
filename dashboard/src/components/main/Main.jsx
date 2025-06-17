import Holdings from "./holdings/Holdings";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Positions from "./Positions/Positions";
import Orders from "./orders/Orders";
import Watchlist from "./watchlist/Watchlist";
import Reports from "./reports/Reports";
import Apps from "./apps/Apps";

const Main = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-2xl py-2 px-4 rounded-xl border border-white/20 h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holding" element={<Holdings />} />
        <Route path="/position" element={<Positions />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/app" element={<Apps />} />
      </Routes>
    </div>
  );
};

export default Main;
