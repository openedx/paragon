function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRampRightFill = function SvgRampRightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M448-120v-267q-33 45-84.5 88.5T248-221l-42-42q62-37 107.5-72.5t75.5-73q30-37.5 44.5-79T448-580v-146l-90 90-42-42 162-162 162 162-42 42-90-90v606h-60Z",
    fill: "currentColor"
  }));
};
export default SvgRampRightFill;