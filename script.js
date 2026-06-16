const tabs       = document.querySelectorAll(".tabs__item");
const infoCopy   = document.querySelector("#info-copy");
const infoImg    = document.querySelector(".info__bag");
const infoVisual = document.querySelector(".info__visual");

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    for (const item of tabs) {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    }

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    // Swap copy text
    infoCopy.textContent = tab.dataset.copy ?? "";

    // Swap tab modifier class on the visual container
    if (infoVisual && tab.dataset.tab) {
      infoVisual.className = "info__visual info__visual--" + tab.dataset.tab;
    }

    // Swap visual image with a quick fade
    if (infoImg && tab.dataset.image) {
      infoImg.style.transition = "opacity 0.25s ease";
      infoImg.style.opacity    = "0";
      setTimeout(() => {
        infoImg.src           = tab.dataset.image;
        infoImg.style.opacity = "1";
      }, 250);
    }
  });
}
