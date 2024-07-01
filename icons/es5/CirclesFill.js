function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCirclesFill = function SvgCirclesFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M685-919q97 0 165.5 68.5T919-685q0 98-68.5 166.5T685-450q-98 0-166.5-68.5T450-685q0-97 68.5-165.5T685-919Zm3 529q28 0 55.5-5.5T798-409q-15 140-117.5 234.5T438-80q-74 0-139.5-28t-114-76.5Q136-233 108-298.5T80-438q0-142 95-245.5T412-798q-12 26-17 55t-5 58q0 123 87 209t211 86Z",
    fill: "currentColor"
  }));
};
export default SvgCirclesFill;