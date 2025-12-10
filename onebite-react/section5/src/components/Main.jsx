import "./Main.css";

// jsx 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 사용 가능
// 2. 숫자, 문자열, 배열 값만 렌더링 가능
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 하나만 존재해야 함 - 최상위 태그로 묶을만한 태그가 없다면 <> </> 사용하여 묶어줘야 함

const Main = () => {
  const user = {
    name: "홍길동",
    isLoggedIn: false,
  };

  return (
    <>
      {user.isLoggedIn ? (
        <h1>로그인 성공</h1>
      ) : (
        <h1 className="logout">로그인 실패</h1>
      )}
    </>
  );
};

export default Main;
