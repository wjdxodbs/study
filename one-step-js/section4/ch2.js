// DOM API를 사용해서 특정요소를 변수에 할당할 때는 변수 이름 앞에 $를 붙이거나 변수명 뒤에 Element를 붙이는 것이 관례

// 특정 id를 가진 요소를 찾아서 변수에 할당
let $color = document.getElementById("color");
console.log($color);

// 특정 css 선택자를 사용해서 요소를 찾아서 변수에 할당
let $animalInfo = document.querySelector(".animal-info");
let ageElement = $animalInfo.querySelector("#age");
console.log($animalInfo);
console.log(ageElement);

// 특정 css 선택자를 사용해서 요소들을 찾아서 배열로 반환
let $infoItems1 = document.querySelectorAll(".info-item");
console.log($infoItems1);

// 특정 class를 가진 요소들을 찾아서 배열로 반환
let $infoItems2 = document.getElementsByClassName("info-item");
console.log($infoItems2);

// 특정 요소들의 태그 이름을 사용해서 요소들을 찾아서 배열로 반환
let $infoItems3 = document.getElementsByTagName("div");
console.log($infoItems3);

// 특정 요소의 class 이름을 수정
let $name = document.querySelector("#name");
$name.className = "dog-name";

// 특정 요소의 id 이름을 수정
$animalInfo.id = "animal";

// 특정 요소의 class 값에 접근 가능한 배열을 반환
console.log($color.classList);

// 특정 요소의 class 값을 추가
$color.classList.add("dog-color");

// 특정 요소의 class 값을 제거
$color.classList.remove("info-item");

// 특정 요소의 텍스트 노드에 접근
ageElement.textContent = "5살";

// 특정 요소의 스타일 속성에 접근
$color.style.color = "blue";
$color.style.fontSize = "30px";
