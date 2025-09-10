import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

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

// Step 2: Wrap React component in a native Web Component
class DefineWordWC extends HTMLElement {
    connectedCallback() {
        const word = this.getAttribute('word') || '';
        const definition = this.getAttribute('definition') || '';

        // Create a div to attach React
        const mountPoint = document.createElement('div');
        this.appendChild(mountPoint);

        // Render React component into this div
        const root = ReactDOM.createRoot(mountPoint);
        root.render(<DefineWord word={word} definition={definition} />);
    }
}

// Step 3: Define the custom element
customElements.define('define-word', DefineWordWC);