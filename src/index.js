import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { baseUrl } from "./api";
import { PostList } from "./components/index";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  console.log("this is allPosts", allPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${baseUrl}/posts`);
        const result = await response.json();

        setAllPosts(result.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <PostList allPosts={allPosts} />
    </div>
  );
};

let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
