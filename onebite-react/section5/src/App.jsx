import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useRef } from "react";
// App 컴포넌트는 모든 컴포넌트의 부모 컴포넌트 이므로 루트 컴포넌트라고 부름
// 루트 컴포넌트
// 컴포넌트를 생성한 함수는 대문자로 시작해야 함

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
  };

  const inputsRef = useRef({});

  const register = (name) => (el) => {
    inputsRef.current[name] = el;
  };

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* 자식 컴포넌트 */}
      <Header />
      <Main />
      <Footer />
      <Button {...buttonProps} />
      <Button text="카페" />
      <Button text="블로그" />
      <div>
        <label htmlFor="red">red</label>
        <input
          ref={register("red")}
          className="red"
          id="red"
          type="radio"
          name="color"
          value="red"
          onClick={handleClick}
        />
        <label htmlFor="blue">blue</label>
        <input
          ref={register("blue")}
          id="blue"
          type="radio"
          name="color"
          value="blue"
          onClick={handleClick}
        />
        <label htmlFor="green">green</label>
        <input
          ref={register("green")}
          id="green"
          type="radio"
          name="color"
          value="green"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default App;
