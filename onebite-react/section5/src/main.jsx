import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // 개발 모드로 리액트를 실행했을 때 우리가 작성한 코드에 잠재적인 문제가 있는지 내부적으로 검사해서 경고를 줌
  // <StrictMode>
  <App />
  // </StrictMode>
);
