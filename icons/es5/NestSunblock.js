function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNestSunblock = function SvgNestSunblock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-680v-120h60v120H80Zm0 520v-120h60v120H80Zm203-440-43-43 85-85 43 43-85 85Zm42 368-85-85 43-43 85 85-43 43Zm-5-218v-60h270l-88-117 48-36 160 213H320Zm460 250v-560h100v560H780ZM80-330v-60q38 0 64-26.5t26-63.5q0-38-26-64t-64-26v-60q63 0 106.5 43.5T230-480q0 62-43.5 106T80-330Z",
    fill: "currentColor"
  }));
};
export default SvgNestSunblock;