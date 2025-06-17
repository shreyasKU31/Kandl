import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import InsightsIcon from "@mui/icons-material/Insights";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Element from "./Element";
import AppsIcon from "@mui/icons-material/Apps";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between gap-4 bg-white/10 backdrop-blur-md shadow-2xl py-2 px-4 rounded-xl border border-white/20 h-full w-fit">
      <div className=" w-full">
        <div className="border-b-2 border-black flex justify-between gap-12 md:gap-4 items-center py-2 mb-6 text-green-400">
          <h3 className="text-2xl font-medium  max-md:hidden max-lg:text-xl">
            Dashboard
          </h3>
          <DashboardIcon />
        </div>
        <div className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " text-white font-medium bg-green-400 rounded hover:bg-green-400"
                : ""
            }
          >
            <Element icon={<HomeFilledIcon />} text={"Home"} />
          </NavLink>
          <NavLink
            to="/holding"
            className={({ isActive }) =>
              isActive ? " text-white font-medium bg-green-400 rounded" : ""
            }
          >
            <Element icon={<WorkIcon />} text={"Portfolio"} />
          </NavLink>
          <NavLink
            to="/position"
            className={({ isActive }) =>
              isActive ? " text-white font-medium bg-green-400 rounded" : ""
            }
          >
            <Element icon={<InsightsIcon />} text={"Positions"} />
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive ? " text-white font-medium bg-green-400 rounded" : ""
            }
          >
            <Element icon={<AttachMoneyIcon />} text={"Orders"} />
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? " text-white font-medium bg-green-400 rounded" : ""
            }
          >
            <Element icon={<BookmarkIcon />} text={"Watchlist"} />
          </NavLink>
          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive ? " text-white font-medium bg-green-400 rounded" : ""
            }
          >
            <Element icon={<AutoStoriesIcon />} text={"Reports"} />
          </NavLink>
          <NavLink
            to="/app"
            className={({ isActive }) =>
              isActive ? " text-white font-medium bg-green-400 rounded" : ""
            }
          >
            <Element icon={<AppsIcon />} text={"Apps"} />
          </NavLink>
        </div>
      </div>
      <div className="border-t-2 pt-4 flex flex-col gap-2">
        <Element icon={<SettingsIcon />} text={"Settings"} />
        <Element icon={<SupportAgentIcon />} text={"Support"} />
      </div>
    </div>
  );
};

export default SideBar;
