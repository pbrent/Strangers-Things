import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { baseUrl } from "./api";
import { PostList, Register, Header, Login, Home } from "./components/index";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

const App = () => {
  // const [allPosts, setAllPosts] = useState([]);
  // console.log("this is allPosts", allPosts);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/posts`);
  //       const result = await response.json();

  //       setAllPosts(result.data.posts);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    
      <Router>
      <div>
        <Switch>
          <Header />
          <Route exact path="/">
            <h1>Welcome to Stranger's Things</h1>
            <h2>Please login above</h2>
          </Route>  
          <Route path="/login">
            <Login />
          </Route>  
          {/* <Register /> */}
          {/* <PostList  /> */}
        </Switch> 
      </div>
    </Router>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
