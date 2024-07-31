function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCheer = function SvgCheer(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m318-763-34-101 38-13 34 101-38 13Zm142-47v-100h40v100h-40Zm182 47-38-13 34-101 38 13-34 101ZM876-39l8-60-242-37-46-152 36-64 38 121 57-18-101-319 22-12 174 330h98v-60h-62L672-661l-119 64 53 164-75 140 65 210 280 44ZM670-231l-64-202 64 202Zm57-18ZM84-39l-8-60 242-37 46-152-36-64-38 121-57-18 101-319-22-12-174 330H40v-60h62l186-351 119 64-53 164 75 140-65 210L84-39Zm206-192 64-202-64 202Zm-57-18Z",
    fill: "currentColor"
  }));
};
export default SvgCheer;