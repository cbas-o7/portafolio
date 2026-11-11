import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import { tabHandler } from "./tabs";
import { submitEmail } from "./email";


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

// NavBar
const navbarLinks = document.querySelectorAll("[data-target-tab]");

navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetTabId = link.getAttribute("data-target-tab");

    const tabButton = document.querySelector(
      `button[aria-controls="${targetTabId}"]`,
    );

    if (tabButton) {
      const eventoMouseDown = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
      });

      tabButton.dispatchEvent(eventoMouseDown);
    }
  });
});

//Submit form
submitEmail()
