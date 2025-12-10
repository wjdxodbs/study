const API_URL = "https://animal-api-two.vercel.app/";

const request = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error(error);
  }
};

export default request;
