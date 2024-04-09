import "./App.css";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
function App() {
  return (
    <>
        {/*<Link to="/auth">*/}
        {/*    Auth*/}
        {/*</Link>*/}
        <Routes>
            <Route path="/auth" element={<LoginPage/>}/>
        </Routes>
    </>
  );
}

export default App;
