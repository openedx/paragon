function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgUppercase = function SvgUppercase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M674-240v-286l-74 74-42-42 146-146 146 146-42 42-74-74v286h-60Zm-514 0 161-440h53l162 440h-52l-43-121H254l-43 121h-51Zm110-165h155l-77-217h-2l-76 217Z",
    fill: "currentColor"
  }));
};
export default SvgUppercase;