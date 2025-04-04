// API 호출 - 외부 서버와 데이터를 주고받는 것

// 웹 사이트 데이터 불러오는 순서
// 1. 웹 사이트가 서버에 원하는 데이터를 요청
// 2. 서버는 요청 받은 데이터를 데이터베이스에서 찾아서 응답
// 3. 데이터베이스는 찾은 데이터를 서버에 전달
// 4. 서버는 찾은 데이터를 웹 사이트에 전달

const fetchData = async () => {
  // api 호출은 필요한 데이터를 전달받기 위해 데이터를 요청하는 것
  // 다양한 이유로 데이터 요청에 실패할 수 있기 때문에 예외처리 필요
  try {
    // Response 객체
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // JSON데이터를 자바스크립트 객체로 변환
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
