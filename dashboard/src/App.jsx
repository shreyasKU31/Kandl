import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr] grid-rows-[1fr_] lg:grid-cols-[1fr_5fr] gap-4">
        <div className="col-span-2">
          <Menu />
        </div>
        <div>
          <SideBar />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
