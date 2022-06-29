/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const params = useParams();
  const [postInfo, setPostInfo] = useState({});
  const [load, setLoad] = useState(false);

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

  return (
    <div>
      {load ? (
        <>
          <div className='post'>
            <h1>{postInfo.title}</h1>
            <h4>{postInfo.body}</h4>
          </div>
          <div className='button-wrap'>
            <Link to={`/edit/${postInfo.postNum}`}>
              <button>수정</button>
            </Link>
            <button>삭제</button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Detail;
