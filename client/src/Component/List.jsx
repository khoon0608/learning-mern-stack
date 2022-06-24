/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const List = ({ contentList }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    let body = {
      text: "Hello",
    };
    axios
      .post("/api/test", body)
      .then((response) => {
        // 성공 핸들링
        console.log(response);
        setText(response.data.text);
      })
      .catch((error) => {
        // 에러 핸들링

        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>{text}</h3>
      {contentList.map((ele, idx) => (
        <div
          key={idx}
          style={{
            width: "100%",
            marginLeft: "1rem",
            alignItems: "end",
          }}>
          <span>내용 : {ele}</span>
          <hr />
        </div>
      ))}
    </>
  );
};

export default List;
