import axios from "axios";

// const API = axios.create({
//   baseURL: "https://api.unsplash.com/search/photos",
// });

const API = Object.create(null);

API.fetchCharacters = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/v1/characters/"); // Use http instead of https
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error); // Handle any errors
  }
};

export default API;
