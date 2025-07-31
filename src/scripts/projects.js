const dataUrl = "../data/projects.json";
const projectsContainer = document.getElementById("projects-container");

fetch(dataUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    projectsContainer.innerHTML = data.projects
      .map((project) => articleComponent(project))
      .join("");
    console.log(data.posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const articleComponent = (project) => {
  return `  
          <article>
            <h3>${project.title}</h3> 
            <p>${project.description}</p>
            <ul>
              ${project.techs.map((tech) => `<li>${tech}</li>`).join("")}
            </ul>
            <video autoplay loop muted playsinline>
                <source src="${project.videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
          </article>`;
};
