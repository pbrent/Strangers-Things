import React from "react";
import ReactDOM from "react";
import { baseUrl } from "../api";

const Profile = ({ token }) => {
  //   const [myProfile, setMyProfile] = useState([]);

  const fetchMe = () => {
    try {
       fetch(`${baseUrl}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("this is the result:", result);
        })
        .catch(console.error);
    } catch (error) {}
  };

  fetchMe();
  return <div>hey is this working</div>;
};

export default Profile;
