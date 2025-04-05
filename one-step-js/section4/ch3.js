let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";

// 특정 요소의 텍스트 노드를 생성
let $typeText = document.createTextNode("말티즈");

// 특정 요소에 자식 요소를 추가
let $animalInfo2 = document.querySelector(".animal-info");
$animalInfo2.appendChild($type);
$type.appendChild($typeText);

let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");
$button.textContent = "버튼";

$animalInfo2.appendChild($button);

// 특정 요소에 이벤트를 추가
$button.addEventListener("click", (e) => {
  console.log("버튼이 클릭되었습니다.");
  console.log(e);
});

// 특정 요소의 내부 HTML을 수정
// 성능이나 보안에 문제가 있을 수 있어 주의가 필요함
// 가능하다면 다른 DOM API를 사용하는 것을 권장
$animalInfo2.innerHTML = "<div id='name'>고양이</div>";
console.log($animalInfo2.innerHTML);
