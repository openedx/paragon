import * as React from "react";
function SvgSnippetFolder(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 6l-2-2H2v16h20V6H12zm7 11h-6V9h3.5l2.5 2.5V17zm-3.12-6.5l1.62 1.62v3.38h-3v-5h1.38z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSnippetFolder;
