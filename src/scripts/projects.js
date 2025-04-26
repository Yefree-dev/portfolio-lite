const dataUrl = "../data/projects.json";
const projectsContainer = document.getElementById("project-container");

fetch(dataUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    projectsContainer.innerHTML = data.projects
      .map((item) => projectComponent(item))
      .join("");
    console.log(data.posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function projectComponent(item) {
  return `
      <li class="post__section__li">
        <a href="${item.link}">
          <div>
            <span class="post__section__li-title">${item.title}</span>
            <span>${item.description}</span>
          </div>
          <span class="post__section__li-line"></span>
          <span>${item.date}</span>
        </a>
      </li>
    `;
}
