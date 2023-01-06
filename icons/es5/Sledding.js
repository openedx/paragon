function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSledding(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm3.22 13.4l1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.1.68 3.25 2.94 2.57 5.04a4.003 4.003 0 01-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24L14.5 12l2.72 5.9zM6 14.25l.48.16.75-2.31.69-2.1-1.92.82v3.43zm7.94 4.16l-6.66-2.16-.46 1.43 6.66 2.16.46-1.43zm.69-1.36l-1.18-2.56-3.97.89 5.15 1.67z",
    fill: "currentColor"
  }));
}

export default SvgSledding;