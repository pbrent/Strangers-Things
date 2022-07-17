import React, { useState, useEffect } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";

const PostList = () => {
  
  const [allPosts, setAllPosts] = useState([]);
  
  
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
  
  return (
    <div>
      <h1>Posts</h1>
      {allPosts.map((post, _id) => {
        return (
          <div key={_id}>
            <h3>{post.title}</h3>
            <p>Description: {post.description}</p>
            <p>Location: {post.location}</p>
            <p>Price: {post.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
