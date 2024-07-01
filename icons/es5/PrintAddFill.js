function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPrintAddFill = function SvgPrintAddFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M242-120v-176H80v-352h800v193q-26-17-55-25.5t-61-8.5q-61 0-112.5 31.5T572-372H302v192h267q8 17 18.5 32t24.5 28H242Zm0-558v-162h476v162H242Zm490 555v-120H612v-60h120v-120h60v120h120v60H792v120h-60Z",
    fill: "currentColor"
  }));
};
export default SvgPrintAddFill;