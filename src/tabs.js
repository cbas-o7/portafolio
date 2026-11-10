// Tabs
export function tabHandler(e, tabButtons) {
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