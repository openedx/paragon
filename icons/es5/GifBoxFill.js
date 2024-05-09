function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGifBoxFill = function SvgGifBoxFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm180-280h120v-70h-30v40h-60v-100h88v-30H300v160Zm165 0h30v-160h-30v160Zm75 0h30v-60h70v-30h-70v-40h90v-30H540v160Z",
    fill: "currentColor"
  }));
};
export default SvgGifBoxFill;