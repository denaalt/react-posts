import React from "react";
import "../css/main.css";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="main-post1">
      <img
        src="https://via.placeholder.com/200"
        alt="main post"
        className="mP"
      />
      <h1>{post.title} </h1>
      <p>description for post</p>
      <div className="button">
        <button>like</button>
      </div>
    </div>
  );
};

export default PostCard;
