export function initializeHoverAndClickEvents(elements) {
  elements.forEach((element) => {
    let isHidden = false;

    element.addEventListener("click", (event) => {
      if (!isHidden) {
        element.classList.add("fade-out");
        isHidden = true;
      } else {
        element.classList.remove("fade-out");
        isHidden = false;
      }

      event.stopPropagation();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const containerItems = document.querySelectorAll(".card");
  initializeHoverAndClickEvents(containerItems);
});
