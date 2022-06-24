/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: "30px",
      }}>
      <Link to='/'>Home</Link>
      <Link to='/upload'>Upload</Link>
      <Link to='/list'>List</Link>
    </div>
  );
};

export default Heading;
