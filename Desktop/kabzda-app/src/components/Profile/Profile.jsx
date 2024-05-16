import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  {
    /*let posts = [
    {
      id: 1,
      message:
        "Faizan can you call me back after 2pm? I need to talk with you.",
      likesCount: 45,
    },
    {
      id: 2,
      message: "I just bought a new laptop, it's amazing!",
      likesCount: 30,
    },
    { id: 3, message: "In 5min I will be at home.", likesCount: 18 },
  ];*/
  }

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
