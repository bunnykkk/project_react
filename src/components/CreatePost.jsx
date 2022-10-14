import React, { useState } from "react";

const CreatePost = ({ addPost }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  // console.log(addPost);

  function createPost() {
    if (!imageUrl.trim() || !author.trim() || !body.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let postObj = {
      id: Date.now(),
      imageUrl,
      author,
      body,
    };

    addPost(postObj);

    setImageUrl("");
    setAuthor("");
    setBody("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter url image"
          onChange={e => setImageUrl(e.target.value)}
          value={imageUrl}
        />
        <br />
        <input
          type="text"
          placeholder="Enter author name"
          onChange={e => setAuthor(e.target.value)}
          value={author}
        />
        <br />
        <input
          type="text"
          placeholder="Enter body"
          onChange={e => setBody(e.target.value)}
          value={body}
        />
        <br />
        <button onClick={createPost}>ADD</button>
      </div>
    </div>
  );
};

export default CreatePost;
