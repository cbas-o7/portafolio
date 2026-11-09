import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

// Tabs
function tabHandler(e, tabButtons) {
  e.preventDefault();
  //selecciona el "section" donde se guardan tanto los buttons como artickes
  const tabContainer = e.target.parentElement.parentElement;
  const targetId = e.target.getAttribute("aria-controls");
  tabButtons.forEach((_tabButton) =>
    _tabButton.setAttribute("aria-selected", false),
  );
  e.target.setAttribute("aria-selected", true);
  e.target.focus();
  tabContainer
    .querySelectorAll("[role=tabpanel]")
    .forEach((tabPanel) => tabPanel.setAttribute("hidden", true));
  tabContainer
    .querySelector(`[role=tabpanel]#${targetId}`)
    .removeAttribute("hidden");

  tabContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Tabs > Tabs Template
const templateTabList = document.querySelector("[aria-label='Tabs Template']");
const templateTabButtons = templateTabList.querySelectorAll("[role=tab]");
templateTabButtons.forEach((tabButton) =>
  tabButton.addEventListener("mousedown", (evt) => {
    tabHandler(evt, templateTabButtons);
  }),
);
templateTabButtons.forEach((tabButton) =>
  tabButton.addEventListener("focus", (evt) => {
    tabHandler(evt, templateTabButtons);
  }),
);
