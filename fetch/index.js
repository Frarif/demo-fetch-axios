const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/3fdc905a-bd85-4a3b-92c8-18e1efc7fa40";

async function getPosts() {
  const response = await fetch(`${BASE_API_URL}/posts`);
  const posts = await response.json();
  console.log(posts);
}

async function addNewPosts() {
  const data = {
    titles: "Demo Fetch Axios",
    story: "Belajar buat hari minggu",
  };

  const response = await fetch(`${BASE_API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newPosts = await response.json();
  console.log(newPosts);
}

getPosts();
