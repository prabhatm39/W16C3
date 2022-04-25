import react from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <RequiredAuth>
      <Route path="book/*" element={<Books/>}/>
        </RequiredAuth>
      
      <Route path="login" element={<Login/>}/>



      </Routes>
    </>
  );
};
export default Mainroutes;
