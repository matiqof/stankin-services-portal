import "./App.css";
import {Outlet, useLocation} from "react-router-dom";
import NavMenu from "./components/NavMenu.tsx";
function App() {
    const location = useLocation()
  return (
    <div className='bg-stankin-bg-main'>
        {location.pathname !== "/auth" && (
            <NavMenu />
        )}
        <Outlet/>
    </div>
  );
}

export default App;
