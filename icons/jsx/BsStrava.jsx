import * as React from "react";
function SvgBsStrava(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      className="bs-strava_svg__bi bs-strava_svg__bi-strava"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M6.731 0L2 9.125h2.788L6.73 5.497l1.93 3.628h2.766L6.731 0zm4.694 9.125l-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875h-2.112z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgBsStrava;
