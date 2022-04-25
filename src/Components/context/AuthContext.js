// import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async (email, password) => {
    //  api request to reqres.in for the token
    let r = await fetch(" https://reqres.in/api/login",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    });
    let data = await r.json();
    setToken(data.token)
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return (
   <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   )
  
};

export { AuthContext, AuthContextProvider };
