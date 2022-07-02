/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const params = useParams();
  const [postInfo, setPostInfo] = useState({});
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const deleteHandle = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const body = { postNum: params.postNum };
      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/list");
          }
        })
        .catch((err) => alert("게시글 삭제에 실패하였습니다."));
    }
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

  return (
    <div>
      {load ? (
        <>
          <div className='post'>
            <h1>{postInfo.title}</h1>
            {postInfo.image ? (
              <img src={`http://localhost:5000/${postInfo.image}`} alt='img' />
            ) : null}
            <h4>{postInfo.body}</h4>
          </div>
          <div className='button-wrap'>
            <Link to={`/edit/${postInfo.postNum}`}>
              <button>수정</button>
            </Link>
            <button onClick={() => deleteHandle()}>삭제</button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Detail;
