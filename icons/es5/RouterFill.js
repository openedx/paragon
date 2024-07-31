function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRouterFill = function SvgRouterFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-324h496v-176h60v176h164v324H120Zm446-547-41-41q24-24 54.5-38t66.5-14q36 0 66.5 14t54.5 38l-41 41q-14-14-35-23.5t-45-9.5q-23 0-44.5 9.5T566-667Zm-85-85-44-44q33-33 88-58.5T646-880q66 0 121 25.5t88 58.5l-44 44q-26-29-68.5-48.5T646-820q-54 0-96.5 19.5T481-752ZM240-240h84v-84h-84v84Zm148 0h84v-84h-84v84Zm148 0h84v-84h-84v84Z",
    fill: "currentColor"
  }));
};
export default SvgRouterFill;