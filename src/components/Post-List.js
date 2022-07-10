import React, { useState, useEffect } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";

const PostList = (props) => {
  const { allPosts } = props;
  return (
    <div>
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
