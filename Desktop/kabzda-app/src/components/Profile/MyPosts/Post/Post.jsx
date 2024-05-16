import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://th.bing.com/th/id/OIP.eFVN1kzuTO4a4O2KEgwleAAAAA?rs=1&pid=ImgDetMain" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
