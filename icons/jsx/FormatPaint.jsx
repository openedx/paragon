import * as React from "react";
function SvgFormatPaint(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z" fill="currentColor" />
    </svg>
  );
}
export default SvgFormatPaint;
