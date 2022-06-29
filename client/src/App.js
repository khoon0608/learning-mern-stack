/** @format */
import Home from "./Component/Page/Home";
import Heading from "./Component/NavBar";
import Upload from "./Component/Page/Upload";
import List from "./Component/Page/List";
import Detail from "./Component/Page/Detail";
import Edit from "./Component/Page/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/post/:postNum' element={<Detail />}></Route>
        <Route path='/edit/:postNum' element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
