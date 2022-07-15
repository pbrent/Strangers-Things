import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PostList, Register, Login, Home } from "./components/index";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import "./styles.css"


const App = () => {
  

  return (
    
      <Router>
      <div>
        <header>
            <h1>Stranger's Things</h1>
        </header>

        <navbar className="navbar">
          
          <Link to="/home">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">Login</Link>
        </navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<Home />} /> */}

        </Routes>
        
        
            
            {/* <Home /> */}
          
            {/* <Login /> */}
          
          {/* <Register /> */}
          {/* <PostList  /> */}
        
      </div>
     </Router>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
