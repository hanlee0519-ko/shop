import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/productAll";
import ProductDetail from "./pages/productDetail";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import PrivateRoute from "./routes/privateRoute";

// 1. 전체상품, 로그인, 상세 페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체상품 페이지를 누르면, 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면, 로그인 페이직 나온다.
// 4. 상품디테일 버튼을 누르면, 로그인이 안된경우, 로그인 페이지가 나온다.
// 5. 로그인이 된 경우, 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 누르면, 로그아웃 된다.
// 7. 로그아웃 되면, 상품 디테일 페이지를 볼 수 없고, 다시 로그인 페이지가 보인다.
// 8. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(true);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
