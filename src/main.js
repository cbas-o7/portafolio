import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { tabHandler } from "./tabs";

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
      /* const ventana = document.getElementById('ventana-portafolio');
      if (ventana) {
        ventana.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } */
    }
  });
});
