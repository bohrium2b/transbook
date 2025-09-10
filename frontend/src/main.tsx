import { createRoot } from "react-dom/client";
import { DefineWord } from "./DefineWord.jsx";
import "process";

// Set window.process for compatibility
// @ts-expect-error
window.process = process;

class DefineWordElement extends HTMLElement {
  connectedCallback() {
    const word = this.getAttribute("word") || "";
    const shadow = this.attachShadow({ mode: "open" });

    // Grab inner HTML as children
    const definitionHTML = this.innerHTML;
    shadow.innerHTML = `<span id="react-root"></span>`;

    const container = shadow.getElementById("react-root");
    if (container) {
      const root = createRoot(container);
      root.render(<DefineWord word={word} definition={definitionHTML} />);
    } else {
      console.error("Failed to find #react-root in shadow DOM.");
    }
  }
}

// Register custom element
customElements.define("define-word", DefineWordElement);