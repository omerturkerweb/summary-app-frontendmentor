import SideBar from "./components/SideBar";
import Sumamry from "./components/Summary";
function App() {
  return (
    <div
      className="App flex flex-row items-center justify-center
      xs:flex-col 
      sm:flex-col
      md:flex-col
      lg:flex-row
      xl:flex-row
      2xl:flex-row"
    >
      <div
        className="app-content bg-[var(--white)] rounded-3xl shadow-xl flex flex-row
      xs:flex-col xs:min-h-[100vh] xs:min-w-[100vw]
      sm:flex-col sm:min-h-[60vh] sm:min-w-[50vw]
      md:flex-col md:min-h-[60vh] md:min-w-[50vw]
      lg:flex-row lg:min-h-[60vh] lg:min-w-[50vw]
      xl:flex-row xl:min-h-[60vh] xl:min-w-[50vw]
      2xl:flex-row 2xl:min-h-[60vh] 2xl:min-w-[50vw]"
      >
        <SideBar />
        <Sumamry />
      </div>
    </div>
  );
}

export default App;
