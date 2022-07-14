import React, { useState, useEffect } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  // const [token, setToken] = useState({});

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setSubmitted(false);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
    setErrorAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetch(`${baseUrl}/users/register`, {
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
          console.log("this is the result", result);
        })
        // setToken(result.data.token)
        console.log("this is token", token)
        .catch(console.error);
    } catch (error) {}
    if (username === "" || password === "") {
      setErrorAlert(true);
    } else {
      setSubmitted(true);
      setErrorAlert(false);
    }
    if (password !== password2) {
      setErrorAlert(true);
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // localStorage.setItem('token', token);
    // setToken(result.data.token)
    setUsername('');
    setPassword('');
    setPassword2('');

  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1>User {username} successfully registered!</h1>
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
      <div>
        <h1>User Registration</h1>
      </div>
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

        <label className="label"> Password: </label>
        <input
          placeholder="Password"
          minLength="6"
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          required
        />

        <label className="label"> Confirm Password: </label>
        <input
          placeholder="Confirm Password"
          minLength="6"
          onChange={handlePassword2}
          className="input"
          value={password2}
          type="password"
          required
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      <p>Already have an account? Sign In</p>
    </div>
  );
};

export default Register;
