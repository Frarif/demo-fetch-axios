let datablogPosts = [];

const url =
  "https://api.kontenbase.com/query/api/v1/3fdc905a-bd85-4a3b-92c8-18e1efc7fa40/posts";

const blogPostsSectionElements = document.getElementById("blog-posts");

async function getToDos() {
  const response = await fetch(url);
  const blogPosts = await response.json();

  datablogPosts = blogPosts;

  datablogPosts.forEach((blogPost) => {
    const blogPostElement = document.createElement("div");

    blogPostElement.innerHTML = `
    <h2>${blogPost.titles}</h2>
    <p>${blogPost.story}</p>
    `;

    blogPostsSectionElements.append(blogPostElement);
  });
}

getToDos();
