function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgNearbyOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.82 12.01L18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l3.99-3.99 10.83 10.83zm-1.63 9.18l-1.41 1.41L16 18.83l-3.99 3.99L1.18 11.99 5.17 8 1.39 4.22 2.8 2.81l18.39 18.38zm-7-4.17l-1.39-1.39-.8.8L7.58 12l.8-.8-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zM16.42 12L12 7.58l-.8.8 4.42 4.42.8-.8z",
    fill: "currentColor"
  }));
}

export default SvgNearbyOff;