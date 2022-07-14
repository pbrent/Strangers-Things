import React, { useState } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";
import "./Register.css";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState('');
  const [token, setToken] = useState('');
  
  

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
      fetch(
        `${baseUrl}/users/login`,
        {
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
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log('this is the login result', result.data.token);
          
          setToken(result.data.token);
        })
        .catch(console.error);
    } catch (error) {};

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem('token', token);

    console.log('this is local storage', localStorage)
    setUsername('');
    setPassword('');

  };

  return (
    <div className="form">
      <h1>Login</h1>

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
        <p>Not registered yet? <Link to='/register'>Create Account here</Link></p>
      </form>



    </div>
  );
};

export default Login;
