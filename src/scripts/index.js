const menuToggle = document.getElementById("menu-toggle");
const aside = document.querySelector(".aside");

menuToggle.addEventListener("click", () => {
  const isOpen = aside.getAttribute("data-open");
  aside.setAttribute("data-open", isOpen === "true" ? "false" : "true");
  console.log(aside.getAttribute("data-open"));
});
