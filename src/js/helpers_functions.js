import * as UI from "./ui.js";

export function alertMessage(message, className, className2, className3) {
  const error = document.querySelector(".error");
  if (!error) {
    const divMessage = document.createElement("div");
    divMessage.textContent = message;
    divMessage.classList.add(className, className2, className3);

    UI.result.appendChild(divMessage);

    setTimeout(() => {
      divMessage.remove();
    }, 3000);
  }
}

export function spinner() {
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("spinner");
  divSpinner.innerHTML = `
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
  `;

  UI.result.appendChild(divSpinner);
}

export function cleanHTML() {
  while (UI.result.firstChild) {
    UI.result.removeChild(UI.result.firstChild);
  }
}
