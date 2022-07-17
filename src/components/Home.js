import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Home = ({ token }) => {
    // const [username, setUsername] = useState('');
  const loggedInMessage = () => {
    return (
      <div className="homepage">
        <h1>Welcome to Stranger's Things, {localStorage.getItem("username")} </h1>
        {/* <h1>Welcome to Stranger's Things, {username} </h1> */}
      </div>
    );
  };

  const loggedOutMessage = () => {
    return (
      <div className="homepage">
        <h1>Welcome to Stranger's Things</h1>
        <h2>Please login above</h2>
      </div>
    );
  };

  if (token) {
    return loggedInMessage();
  } else {
    return loggedOutMessage();
  }
};

export default Home;
