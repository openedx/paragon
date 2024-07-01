function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTransitionPushFill = function SvgTransitionPushFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M338-160v-59h82v-521h-82v-60h142v640H338Zm222 0v-640h360v640H560ZM212-330l-43-42 76-78H40v-60h205l-76-76 42-42 149 148-148 150Z",
    fill: "currentColor"
  }));
};
export default SvgTransitionPushFill;