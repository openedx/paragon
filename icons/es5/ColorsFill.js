function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgColorsFill = function SvgColorsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M391-96 56-431l292-292-114-114 43-43 448 450L391-96Zm0-584L141-430h500L391-680Zm409 560q-34 0-57-23t-23-57q0-26 10-49.5t26-43.5l44-57 44 57q15 20 25.5 43.5T880-200q0 34-23.5 57T800-120Z",
    fill: "currentColor"
  }));
};
export default SvgColorsFill;