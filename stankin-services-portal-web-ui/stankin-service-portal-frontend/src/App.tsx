import "./App.css";
import {Outlet, useLocation} from "react-router-dom";
import NavMenu from "./components/NavMenu.tsx";
function App() {
    const location = useLocation()
  return (
    <div>
        {location.pathname !== "/auth" && (
            <NavMenu />
        )}
        <div className="max-w-[1100px] px-[30px] mx-auto">
            <Outlet/>
        </div>
    </div>
  );
}

export default App;
