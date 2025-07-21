const projectsContainer = document.getElementById("projects-container");

const projects = [
  {
    title: "QR Code Component",
    description:
      "A QR code component that use smooth transitions with elegant blur to showcase the latest uptakes of the user social networks.",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Yefree-dev/web-dev-journey/tree/main/classes-a1/project-a1",
    videoSrc: "../../public/videos/qr-component.mp4",
  },
];

const renderProjects = () => {
  projectsContainer.innerHTML = projects.map(articleComponent).join("");
};

window.addEventListener("DOMContentLoaded", renderProjects);

const articleComponent = (project) => {
  return `  
          <article>
            <h3>${project.title}</h3> 
            <p>${project.description}</p>
            <ul>
              ${project.techs.map((tech) => `<li>${tech}</li>`).join("")}
            </ul>
            <video  autoplay muted loop>
                <source src="${project.videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
          </article>`;
};
