import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  PostList,
  Register,
  Login,
  Home,
  Profile,
  Logout,
  Create
} from "./components/index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

const App = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <header>
          <h1>Stranger's Things</h1>
        </header>

        <navbar className="navbar">
          {token ? (
            <>
              <Link to="/home">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/home">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={<Home token={token} username={username} />}
          />
          <Route path="/posts" element={<PostList />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<Profile token={token} setToken={setToken} />}
          />
          <Route
            path="/logout"
            element={<Logout token={token} setToken={setToken} />}
          />
          
        </Routes>
        {
          // token && token.length ? <div>heres your token {token}</div> : <div>no token</div>
        }
      </div>
    </Router>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
