import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// App 컴포넌트를 root 요소에 렌더링
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
