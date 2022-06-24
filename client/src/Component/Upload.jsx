/** @format */

import React, { useEffect } from "react";

const B = ({ contentList, setContentList, setContent, content }) => {
  useEffect(() => {
    alert("content Uploaded!");
  }, [contentList]);
  return (
    <form
      style={{
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type='text'
        value={content}
        style={{ width: "300px" }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setContentList((prev) => [...prev, content]);
          setContent("");
        }}
        style={{ width: "100px" }}>
        완료
      </button>
    </form>
  );
};

export default B;
