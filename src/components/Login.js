import React, { useState, useEffect } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";
import './Login.css'

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
      fetch(
        `${baseUrl}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: userName,
              password: password,
            },
          }),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("this is the result", result);
        })
        .catch(console.error);
    } catch (error) {}
    if (userName === '' || password === '') {
        setErrorAlert(true)
    } else {
        setSubmitted(true);
        setErrorAlert(false);
    }
  };

  const successMessage = () => {
    return (
        <div className = 'success' style={{display: submitted ? '' : 'none',}}>
            <h1>User {userName} successfully registered!</h1>
        </div>
    );
  }
  
  const errorMessage = () => {
    return (
        <div className='error' style={{display: errorAlert ? '' : 'none', }}>
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
            <input placeholder='Username' onChange={handleUsername} className="input" value={userName} type="text" required />

            <label className="label"> Password: </label>
            <input placeholder='Password' minLength='6' onChange={handlePassword} className="input" value={password} type="password" required />

            <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
        </form>

    </div>
  )
};

export default Login;