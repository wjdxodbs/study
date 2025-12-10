import React from "react";

// props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 값
const Button = (props) => {
  const { text } = props;

  // 이벤트 핸들러 - 이벤트가 발생했을 때 그것을 처리하는 것
  // 합성 이벤트 - 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
  const handleClick = (e) => {
    console.log("클릭");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default Button;
