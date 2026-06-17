const tabs       = document.querySelectorAll(".tabs__item");
const infoCopy   = document.querySelector("#info-copy");
const infoImg    = document.querySelector(".info__bag");
const infoVisual = document.querySelector(".info__visual");

// Track the pending fade timer so we can cancel it if the user
// switches tabs before the previous transition completes.
let fadeTimer = null;

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

    // Swap visual image with a quick fade.
    // Clear any in-flight timer first to prevent stale callbacks
    // from a previous tab click overwriting the correct image.
    if (infoImg && tab.dataset.image) {
      const targetImage = tab.dataset.image; // capture before timeout
      infoImg.style.transition = "opacity 0.25s ease";
      infoImg.style.opacity    = "0";
      clearTimeout(fadeTimer);
      fadeTimer = setTimeout(() => {
        infoImg.src           = targetImage;
        infoImg.style.opacity = "1";
      }, 250);
    }
  });
}
