import Register from "./Component/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Result from "./Component/Result";
import Update from "./Component/Update";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}>
          <Route path="Home" element={<Home/>}/>
          <Route path="Profile" element={<Profile/>}/>
          <Route path="Update" element={<Update/>}/>
          <Route path="Result" element={<Result/>}/>
          
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
