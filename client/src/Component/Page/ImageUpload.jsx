/** @format */

import axios from "axios";
import React from "react";

const ImageUpload = ({ setImage }) => {
  const imageUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post("/api/post/image/upload", formData)
      .then((res) => {
        setImage(res.data.filePath);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type='file' accept='image/*' onChange={(e) => imageUpload(e)} />
    </div>
  );
};

export default ImageUpload;
