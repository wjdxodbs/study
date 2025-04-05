const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector(".content");
let template = "";

const getData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    data.forEach((item) => {
      template += `
        <img src="${item.url}" alt="${item.name}" />
      `;
    });
    $content.innerHTML = template;
  } catch (error) {
    console.error(error);
  }
};

getData();
