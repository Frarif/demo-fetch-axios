const axiosLib = require("axios");

const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/3fdc905a-bd85-4a3b-92c8-18e1efc7fa40";

const axios = axiosLib.create({ baseURL: BASE_API_URL });

async function getPosts() {
  const response = await axios.get(`${BASE_API_URL}/posts`);
  const posts = response.data;
  console.log(posts);
}

async function addNewPosts() {
  const data = {
    titles: "Belajar Axios Lagi",
    story: "Belajar buat hari minggu besok",
  };

  const response = await axios.post(`/posts`, data);
  const newPosts = response.data;
  console.log(newPosts);
}

getPosts();
