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
          <Element icon={<HomeFilledIcon />} text={"Home"} />
          <Element icon={<WorkIcon />} text={"Portfolio"} />
          <Element icon={<InsightsIcon />} text={"Positions"} />
          <Element icon={<AttachMoneyIcon />} text={"Orders"} />
          <Element icon={<BookmarkIcon />} text={"Watchlist"} />
          <Element icon={<AutoStoriesIcon />} text={"Reports"} />
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
