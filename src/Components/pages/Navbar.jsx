import { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";




export const Navbar = () => {
  const { token } = useContext(AuthContext);
  const navigation = useNavigate();
  const Location = useLocation();
  useEffect(() => {
    if(!token){
      navigation("/login")
    }
    else{
      navigation(Location.state)
    }
  },[token])
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav className="nav">
      <div>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div>
             <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <NavLink to="/book">Books</NavLink>
          </div>
          <div>
            <NavLink to="/login">Login</NavLink>
          </div>

        
      </nav>
    </>
  );
};
