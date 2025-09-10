// Move this declaration to a separate file, e.g. src/custom-elements.d.ts:
// ---FILEPATH /workspaces/transbook/frontend/src/custom-elements.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'define-word': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export {};
// ---END OF FILEPATH