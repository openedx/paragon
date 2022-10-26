function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgBy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.982 2c2.809 0 5.178.964 7.107 2.893C21.03 6.833 22 9.203 22 12c0 2.81-.953 5.149-2.858 7.017-2.024 1.989-4.41 2.983-7.16 2.983-2.703 0-5.048-.983-7.035-2.947C2.982 17.09 2 14.738 2 12c0-2.738.982-5.107 2.947-7.107C6.875 2.964 9.22 2 11.982 2zm.036 1.804c-2.274 0-4.196.798-5.768 2.393C4.619 7.863 3.803 9.798 3.803 12c0 2.215.81 4.132 2.429 5.75 1.619 1.62 3.547 2.428 5.785 2.428 2.226 0 4.167-.815 5.822-2.446 1.571-1.512 2.357-3.423 2.357-5.732 0-2.274-.798-4.208-2.393-5.804-1.595-1.595-3.523-2.392-5.785-2.392zm2.679 5.714v4.089h-1.143v4.857h-3.107v-4.857H9.304v-4.09a.62.62 0 01.187-.454.622.622 0 01.456-.188h4.107c.167 0 .316.063.446.188.13.124.197.276.197.455zm-4.09-2.571c0-.94.464-1.411 1.393-1.411.93 0 1.393.47 1.393 1.41 0 .929-.465 1.393-1.393 1.393-.928 0-1.393-.464-1.393-1.392z",
    fill: "currentColor"
  }));
}

export default SvgBy;