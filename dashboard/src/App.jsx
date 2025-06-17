import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-[1fr_4fr] grid-rows-[1fr_8fr] lg:grid-cols-[1fr_8fr] max-md:grid-cols-[1fr_7fr] gap-4 h-screen p-8">
        <div className="col-span-2 row-span-1">
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
