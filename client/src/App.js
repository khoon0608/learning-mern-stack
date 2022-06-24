/** @format */
import { useState } from "react";
import Test from "./Test";
import Heading from "./Component/Heading";
import Upload from "./Component/Upload";
import List from "./Component/List";
import { Routes, Route } from "react-router-dom";

function App() {
  const [contentList, setContentList] = useState([]);
  const [content, setContent] = useState("");
  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<Test />}></Route>
        <Route
          path='upload'
          element={
            <Upload
              setContent={setContent}
              content={content}
              contentList={contentList}
              setContentList={setContentList}
            />
          }></Route>
        <Route path='list' element={<List contentList={contentList} />}></Route>
      </Routes>
    </>
  );
}

export default App;
