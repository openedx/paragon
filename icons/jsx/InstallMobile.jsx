import * as React from "react";

function SvgInstallMobile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17 18H7V6h7V1H5v22h14v-7h-2z" />
      <path d="M18 14l5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z" />
    </svg>
  );
}

export default SvgInstallMobile;
