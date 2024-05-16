import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
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

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p[0].likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        <Post />
        {postsElements}

        {/*<Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount} 
        />
        />*/}
      </div>
    </div>
  );
};

export default MyPosts;
