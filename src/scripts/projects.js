// Projects #1

const buttonsContainer = document.getElementById("buttons-container");
const buttonsSocialLinks = document.querySelectorAll(".main__btn");

buttonsSocialLinks.forEach((button) => {
  button.addEventListener("click", () => {
    moveAfterIndicator(button);
    changeTabs(button);
  });
});

// Move ::after indicator hover effect on buttons

function moveAfterIndicator(newTab) {
  const newButtonWidth = newTab.offsetWidth / buttonsContainer.offsetWidth;

  buttonsContainer.style.setProperty("--_left", newTab.offsetLeft + "px");
  buttonsContainer.style.setProperty("--_width", newButtonWidth);
  buttonsContainer
    .querySelectorAll("button")
    .forEach((btn) => btn.style.setProperty("--_color", "hsl(0, 0%, 25%)"));
  newTab.style.setProperty("--_color", "hsl(0, 0%, 95%)");
}

function adaptHeight(currentTab) {
  const panelContainer = document.querySelector(".main__panel");

  const height = currentTab.offsetHeight;
  console.log(height);

  panelContainer.style.setProperty("--_height", height + 27 + "px");
}

function changeTabs(currentTab) {
  // When user clicks the tab button obtain the aria-controls
  const ariaControls = currentTab.getAttribute("aria-controls");

  // set every button that is not the selected one hidden.
  buttonsSocialLinks.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });

  // except the button that's been clicked.
  currentTab.setAttribute("aria-selected", "true");

  // Make sure the button has the `aria-selected` property.
  if (ariaControls === null) return;

  console.log(ariaControls);

  const allTabs = document.querySelectorAll(".main__panels");

  allTabs.forEach((tab) => {
    tab.setAttribute("aria-hidden", "true");
  });
  // Set the current tab aria-hidden="false"
  const currentTabSelected = document.querySelector(
    `.main__panels[data-panel="${ariaControls}"]`
  );

  currentTabSelected.setAttribute("aria-hidden", "false");
  adaptHeight(currentTabSelected);

  console.log(currentTabSelected);
  // .setAttribute("aria-hidden", "true");
}

// Project #2

const board = document.querySelector(".contributions-board");

const activityLevels = [
  "var(--clr-bgk)", // No commits
  "#c6e48b", // 1-9 commits
  "#7bc96f", // 10-19 commits
  "#239a3b", // 20-29 commits
  "#196127", // 30+ commits
];

// Generate 365 days
for (let i = 0; i < 365; i++) {
  const day = document.createElement("div");

  // Random level of activity
  const level = Math.floor(Math.random() * activityLevels.length);

  day.style.backgroundColor = activityLevels[level];

  board.appendChild(day);
}
