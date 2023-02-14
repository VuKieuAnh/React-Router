import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/admin'} element={<Admin/>}></Route>
      </Routes>
    </>
  );
}

export default App;
