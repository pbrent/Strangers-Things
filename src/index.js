import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { baseUrl } from "/root/Code/Strangers-Things/src/api/index.js";

const App = () => {
  const [posts, setPosts] = useState([]);
//   console.log("this is posts: ", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${baseUrl}/posts`);
      const result = await response.json();

      setPosts(result);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Placeholder</h1>
      {
        posts.map((post) => <div key={post.data.posts[0].id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
        
        </div>)
      }
    </>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
