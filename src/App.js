import { useWindowSize } from "@react-hook/window-size";
import SideBar from "./components/SideBar";
import Sumamry from "./components/Summary";
function App() {
  return (
    <div className="App flex flex-row items-center justify-center">
      <div
        className="app-content bg-[var(--white)] rounded-3xl shadow-xl min-h-[60vh] min-w-[50vw]  flex flex-row
      xs:flex-col 
      sm:flex-col
      md:flex-col
      lg:flex-row
      xl:flex-row
      2xl:flex-row"
      >
        <SideBar />
        <Sumamry />
      </div>
    </div>
  );
}

export default App;
