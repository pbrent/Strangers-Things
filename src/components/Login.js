import React, { useEffect, useState } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";
import "./Register.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { storeCurrentUser } from "../auth";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setSubmitted(false);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("this is the login result", result);
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);

          

          setUsername("");
          setPassword("");

          location.replace("/home");

          const user = {
            username,
            password,
          };
        })
        .catch(console.error);
    } catch (error) {}
    if (username === "" || password === "") {
      setErrorAlert(true);
    } else {
      setSubmitted(true);
      setErrorAlert(false);
    }

    // console.log('this is local storage', localStorage)
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1>User {username} logged in!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: errorAlert ? "" : "none" }}>
        <h1>Please enter all required fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <label className="label">Username: </label>
        <input
          placeholder="Username"
          onChange={handleUsername}
          className="input"
          value={username}
          type="text"
          required
        />

        <label className="label">Password: </label>
        <input
          placeholder="Password"
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          required
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <p>
          Not registered yet? <Link to="/register">Create Account here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
