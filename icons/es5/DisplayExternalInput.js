function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDisplayExternalInput = function SvgDisplayExternalInput(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m720-80-43-43 88-87H560v-60h205l-87-88 42-42 160 160L720-80Zm-600-40v-232h60v172h172v60H120Zm0-488v-232h232v60H180v172h-60Zm660 0v-172H608v-60h232v232h-60Z",
    fill: "currentColor"
  }));
};
export default SvgDisplayExternalInput;