function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgWbIridescent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 15h14V9.05H5V15zm6-14v3h2V1h-2zm8.04 2.6l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 23v-2.95h-2V23h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 5.01L5.34 6.8l1.41-1.41L4.96 3.6 3.55 5.01zM4.96 20.5l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z",
    fill: "currentColor"
  }));
}

export default SvgWbIridescent;