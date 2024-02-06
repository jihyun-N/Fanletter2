import Detail from "pages/Detail";
import Home from "pages/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import fakeData from "fakeData.json";

export default function Router() {
  const [letters, setLetters] = useState(fakeData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        {/* 패스에서 아무것도 아닐때에는 홈화면 */}
        <Route
          path="/detail/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        />
        {/* 상세페이지 이동하기 */}
        {/* 패스에서 디테일 컴포넌트일때에는 디테일 컴포넌트로, 패스에 파라미터는 id로 설정*/}
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* 리플레이스를 통해 뒤로 가기시 홈화면으로 */}
      </Routes>
    </BrowserRouter>
  );
}
