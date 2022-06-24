/** @format */

import React from "react";

const List = ({ contentList }) => {
  
  return (
    <>
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
