function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgGroupOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4h-.18l-.77-.77c.6-.94.95-2.05.95-3.23zm7.83 12H23v-3c0-2.18-3.58-3.47-6.34-3.87 1.1.75 1.95 1.71 2.23 2.94L22.83 20zM7.24 4.41a3.996 3.996 0 015.35 5.35L7.24 4.41zM9.17 12H9c-2.21 0-4-1.79-4-4v-.17L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41L17 19.83V20H1v-3c0-2.66 5.33-4 8-4 .37 0 .8.03 1.25.08L9.17 12z",
    fill: "currentColor"
  }));
}

export default SvgGroupOff;