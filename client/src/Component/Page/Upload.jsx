/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "post-title") {
      setPost((prev) => ({
        ...prev,
        title: e.target.value,
      }));
    } else if (name === "post-body") {
      setPost((prev) => ({
        ...prev,
        body: e.target.value,
      }));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (post.title === "" || post.body === "") {
      alert("제목과 글을 모두 적어주세요");
      return;
    }
    let body = post;
    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("게시물 작성이 완료되었습니다.");
          navigate("/list");
        } else alert("게시물 작성에 실패하였습니다.");
      })
      .catch((err) => console.log(err));
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form
      style={{
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyPost: "space-between",
      }}>
      <input
        name='post-title'
        type='text'
        value={post.title}
        style={{ width: "300px" }}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        name='post-body'
        cols='30'
        rows='10'
        value={post.body}
        onChange={(e) => handleChange(e)}></textarea>
      <button onClick={(e) => handleClick(e)} style={{ width: "100px" }}>
        완료
      </button>
    </form>
  );
};

export default Upload;
