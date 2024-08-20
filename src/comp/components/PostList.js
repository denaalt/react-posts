import React from "react";
import PostCard from "./PostCard";
import posts from "../../posts";

const PostList = () => {
  const upDatedPosts = posts.map((post) => {
    return <PostCard post={post} />;
  });

  return <div className="main-post"> {upDatedPosts} </div>;
};

export default PostList;
