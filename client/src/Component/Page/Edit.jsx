/** @format */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({});
  const [load, setLoad] = useState(false);
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

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
    let body = {
      ...post,
      postNum: params.postNum,
    };
    axios
      .post("/api/post/edit", body)
      .then((res) => {
        if (res.data.success) {
          alert("게시물 수정이 완료되었습니다.");
          navigate("/list");
        } else alert("게시물 수정에 실패하였습니다.");
      })
      .catch((err) => console.log(err));
    setPost({
      title: "",
      body: "",
    });
  };
  useEffect(() => {
    const body = { postNum: params.postNum };
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.postList);
          setLoad(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setPost({
      title: postInfo.title,
      body: postInfo.body,
    });
  }, [postInfo]);

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
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/list");
        }}>
        취소
      </button>
      <button onClick={(e) => handleClick(e)} style={{ width: "100px" }}>
        완료
      </button>
    </form>
  );
};

export default Edit;
