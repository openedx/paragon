function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAutoReadPause = function SvgAutoReadPause(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M370-400h60v-320h-60v320Zm160 0h60v-320h-60v320ZM80-80v-800h800v640H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgAutoReadPause;