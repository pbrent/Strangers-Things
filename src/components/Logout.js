import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { default as Home } from "./Home";
import { unstable_HistoryRouter } from "react-router-dom";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("token");

    location.replace("/home");
  };

  handleLogout();
};

export default Logout;

// console.log(token);
// if (token) {
//   console.log("about to call");
//   handleLogout();
// }
