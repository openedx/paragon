function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgQrCodeFill = function SvgQrCodeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-510v-330h330v330H120Zm60-60h210v-210H180v210Zm-60 450v-330h330v330H120Zm60-60h210v-210H180v210Zm330-330v-330h330v330H510Zm60-60h210v-210H570v210Zm188 450v-82h82v82h-82ZM510-367v-83h82v83h-82Zm82 82v-82h83v82h-83Zm-82 83v-83h82v83h-82Zm82 82v-82h83v82h-83Zm83-82v-83h83v83h-83Zm0-165v-83h83v83h-83Zm83 82v-82h82v82h-82Z",
    fill: "currentColor"
  }));
};
export default SvgQrCodeFill;