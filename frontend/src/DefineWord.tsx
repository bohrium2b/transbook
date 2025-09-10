import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { createRoot } from 'react-dom/client';

// Step 1: React component
type WordProps = {
    word: string;
    definition: string;
}
export const DefineWord = ({ word, definition }: WordProps) => {
    const [open, setOpen] = useState(false);
    console.log(definition);
    return (
        <>
            <span
                style={{ borderBottom: '1px dotted #000', cursor: 'pointer' }}
                onClick={() => setOpen(true)}
            >
                {word}
            </span>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{word}</DialogTitle>
                <DialogContent>
                    <div dangerouslySetInnerHTML={{ __html: definition }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        (Definition provided by ABC Dictionary)
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
};


export class DefineWordElement extends HTMLElement {
  connectedCallback() {
    const word = this.getAttribute("word") || "";


    const shadow = this.attachShadow({ mode: "open" });
    const definitionHTML = this.innerHTML || shadow.innerHTML || "Definition not available.";
    this.innerHTML = ""; // Clear light DOM content
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