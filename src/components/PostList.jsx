import React from "react";

const PostList = ({ posts, deletePosts }) => {
  let style = {
    border: "2px solid red",
    width: "200px",
  };
  return (
    <div>
      {posts.map(item => {
        return (
          <div style={style} key={item.id}>
            <img src={item.imageUrl} alt="" width="200" height="200" />
            <h2>{item.author}</h2>
            <h2>{item.body}</h2>
            <button onClick={() => deletePosts(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
