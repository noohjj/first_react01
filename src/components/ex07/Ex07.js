import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import PageNotFound from "./pages/PageNotFound";
import Header from "../ex01/Header";

const Ex07 = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Ex07;

// *react-router-dom
// => 리액트 경로 설정할 때 사용
// => HashRouter -> Routes -> Route 순으로 구성
// => Route의 path props으로 경로 설정
// => Route의 element props으로 컴포넌트 설정
// => 404페이지는 /* f로 설정
