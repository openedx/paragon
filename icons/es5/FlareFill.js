function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlareFill = function SvgFlareFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-450v-60h232v60H40Zm271-157-80-80 42-42 80 80-42 42Zm139-81v-232h60v232h-60Zm199 81-42-42 80-80 42 42-80 80Zm39 157v-60h232v60H688Zm-208 72q-42.5 0-72.25-29.75T378-480q0-42.5 29.75-72.25T480-582q42.5 0 72.25 29.75T582-480q0 42.5-29.75 72.25T480-378Zm212 152-85-85 42-42 85 85-42 42Zm-424 0-42-42 85-85 42 42-85 85ZM450-40v-232h60v232h-60Z",
    fill: "currentColor"
  }));
};
export default SvgFlareFill;