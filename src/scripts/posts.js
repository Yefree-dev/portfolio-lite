const dataUrl = "../data/posts.json";
const postContainer = document.getElementById("post-container");

fetch(dataUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    postContainer.innerHTML = data.posts
      .map((post) => postComponent(post))
      .join("");
    console.log(data.posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function postComponent(post) {
  return `
      <li class="post__section__li">
        <a href="${post.link}">
          <div>
            <span class="post__section__li-title">${post.title}</span>
            <span>${post.description}</span>
          </div>
          <span class="post__section__li-line"></span>
          <span>${post.date}</span>
        </a>
      </li>
    `;
}
