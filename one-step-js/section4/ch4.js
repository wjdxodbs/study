// 폼 조작
// form태그는 사용자와의 상호작용을 가능하게 하는 HTML 요소
// 사용자가 데이터를 입력하고 제출할 수 있는 요소
// 폼 요소는 폼 데이터를 제출하고 처리하는 데 사용되는 요소
let $fruitSelect = document.getElementById("fruit-select");

$fruitSelect.addEventListener("change", (e) => {
  console.log(e.target.value);
});

$fruitSelect.remove(1);

let $userName = document.getElementById("userName");
let $userPassword = document.getElementById("userPassword");
let $loginButton = document.getElementById("login-button");

$loginButton.addEventListener("click", (e) => {
  console.log($userName.value, $userPassword.value);
});
