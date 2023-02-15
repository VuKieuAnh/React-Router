import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import CreateStudent from "./pages/student/CreateStudent";
import ListStudent from "./pages/student/ListStudent";
import EditStudent from "./pages/student/EditStudent";

function App() {
  return (
    <>
      <Routes>
          <Route path={'/admin'} element={<Admin/>}></Route>
          <Route path={'/'} element={<Home/>}>
              <Route path={'/create-student'} element={<CreateStudent/>}></Route>
              <Route path={'/list-student'} element={<ListStudent/>}></Route>
              <Route path={'/edit-student/:id'} element={<EditStudent/>}></Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
