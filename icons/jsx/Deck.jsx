import * as React from "react";

function SvgDeck(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M22 9L12 2 2 9h9v13h2V9z" fill="currentColor" />
      <path
        d="M4.14 12l-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDeck;
