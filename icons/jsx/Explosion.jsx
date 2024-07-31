import * as React from "react";
const SvgExplosion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="m480-225 75.86-75.44H660V-404l76-76-75.9-75.9v-104.2H555.9L480-736l-75.9 75.9H299.9v104.2L224-480l76 75.86V-300h102l78 75Zm1 196L346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Zm0-84 107.92-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm0-368Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgExplosion;
