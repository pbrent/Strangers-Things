import React, { useState, useEffect } from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";

const Profile = ({ token }) => {
  const [myProfilePosts, setMyProfilePosts] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [location, setLocation] = useState([]);
  const [ifWillDeliver, setIfWillDeliver] = useState(false);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState([]);

  const handleMessage = async (event) => {
    try {
      fetch(`${baseUrl}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: content,
          },
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("this is message result", result);
        });
    } catch (error) {}
    // return (
    //   <form>
    //     <h3>Create Message</h3>
    //       <input type="text" value={messages} onChange={() => setMessages(event.target.value)} />
    //       <button type="submit" onClick={() => handleMessage(event)}
    //   </form>
    // )
  };

  const handleDelete = async (postIdToDelete) => {
    const fetchDelete = await fetch(`${baseUrl}/posts/${postIdToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });

    if (fetchDelete) {
      const newPosts = myProfilePosts.filter(
        (post) => post._id !== postIdToDelete
      );
      setMyProfilePosts(newPosts);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: ifWillDeliver,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {})
      .catch(console.error);
  };

  useEffect(() => {
    const fetchMe = async () => {
      try {
        await fetch(`${baseUrl}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setMyProfilePosts(result.data.posts);
            // setMessages(result.data.messages)
            // console.log("these are messages:", result.data.messages)
          })
          .catch(console.error);
      } catch (error) {}
    };

    fetchMe();
  }, []);

  return (
    <>
      <div>
        <h1>Create a Post</h1>
        <form>
          <label className="label">Title:</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label className="label">Description:</label>
          <input
            className="input"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label className="label">Price:</label>
          <input
            className="input"
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <label className="label">Location:</label>
          <input
            className="input"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <label className="label">Will deliver?</label>
          <input
            className="input"
            type="checkbox"
            value={ifWillDeliver}
            onChange={(event) => setIfWillDeliver(event.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      <div>
        <h1>Posts by {localStorage.getItem("username")}</h1>
        {myProfilePosts.map((post, _id) => {
          return (
            <div key={_id}>
              <h3>{post.title}</h3>
              <p>Description: {post.description}</p>
              <p>Location: {post.location}</p>
              <p>Price: {post.price}</p>
              <p>Will deliver? {post.willDeliver}</p>
              <p>Messages: {post.messages}</p>
              <button type="button" onClick={() => handleDelete(post._id)}>
                Delete
              </button>
              <button type="button" onClick={() => handleMessage(post._id)}>
                Message
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
