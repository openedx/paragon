function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgLinkedCamera(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 14,
    r: 3
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8h1.33c0-1.84-1.49-3.33-3.33-3.33V6c1.11 0 2 .89 2 2zm2.67 0H22c0-3.31-2.69-6-6-6v1.33c2.58 0 4.67 2.09 4.67 4.67zM15 7V4H9L7.17 6H2v16h20V9h-5c0-1.1-.9-2-2-2zm-3 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
    fill: "currentColor"
  }));
}
export default SvgLinkedCamera;