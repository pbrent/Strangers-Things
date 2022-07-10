import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {baseUrl} from './api';

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
    console.log('this is allPosts', allPosts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${baseUrl}/posts`);
        const result = await response.json();
        
        
        setAllPosts(result.data.posts);
        
      } catch (error) {
        console.error(error)
      }

    };

    fetchPosts();
  }, []);

    

  return (
    <div>
      <h1>Posts</h1>
      {
        allPosts.map((post, _id) => {
          return <div key={_id}>
              <h3>{post.title}</h3>
              <p>Description: {post.description}</p>
              <p>Location: {post.location}</p>
              <p>Price: {post.price}</p>
          </div>
        })
      }
      
    </div>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
