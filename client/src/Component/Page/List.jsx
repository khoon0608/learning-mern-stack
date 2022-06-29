/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        console.log(res.data.postList);
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {postList.map((post, idx) => (
        <div
          key={idx}
          style={{
            width: "100%",
            marginLeft: "1rem",
            alignItems: "end",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          }}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={`/post/${post.postNum}`}>
            <h1>제목 : {post.title}</h1>
            <h4>본문 : {post.body}</h4>
          </Link>
        </div>
      ))}
    </>
  );
};

export default List;
