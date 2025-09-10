import { DefineWordElement } from "./DefineWord.jsx";

if (typeof window !== 'undefined' && !window.process) {
  window.process = { env: {} };
}

// Register custom element
customElements.define("define-word", DefineWordElement);