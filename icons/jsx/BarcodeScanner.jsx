import * as React from "react";
const SvgBarcodeScanner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M40-120v-182h60v122h122v60H40Zm697 0v-60h122v-122h60v182H737ZM153-231v-499h80v499h-80Zm121 0v-499h42v499h-42Zm122 0v-499h83v499h-83Zm125 0v-499h121v499H521Zm163 0v-499h42v499h-42Zm83 0v-499h38v499h-38ZM40-658v-182h182v60H100v122H40Zm819 0v-122H737v-60h182v182h-60Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBarcodeScanner;
