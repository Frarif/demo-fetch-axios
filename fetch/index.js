const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/3fdc905a-bd85-4a3b-92c8-18e1efc7fa40";

const API_URL = `${BASE_API_URL}/posts`;

async function getPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();
  console.log(posts);
}

async function addNewPosts() {
  const data = {
    titles: "Demo Fetch Axios",
    story: "Belajar buat hari minggu",
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newPosts = await response.json();
  console.log(newPosts);
}

async function patchData() {
  const data = {
    titles: "Session 16",
    story: "Pembagian kelompok buat project akhir.",
  };

  const response = await fetch(`${API_URL}/63e79f338185f56900e351ce`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const resultPatch = await response.json();
  console.log(resultPatch);
}

patchData();
