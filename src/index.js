import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import {baseUrl} from './api';

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  // console.log(allPosts)

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/posts`);
  //       const result = await response.json();
        
        
  //       setAllPosts(result);
        
  //     } catch (error) {
  //       console.error(error)
  //     }

  //   };

  //   fetchPosts();
  // }, []);

    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        
        setAllPosts(result);
      }
      fetchPosts();
    })

  return (
    <div>
      <h1>POSTS</h1>
      
    </div>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
