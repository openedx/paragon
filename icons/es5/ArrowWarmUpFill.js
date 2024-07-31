function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArrowWarmUpFill = function SvgArrowWarmUpFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-766 242-558l-42-42 280-280 280 280-42 42-208-208v306h-60v-306Zm0 506v-140h60v140h-60Zm0 180v-120h60v120h-60Z",
    fill: "currentColor"
  }));
};
export default SvgArrowWarmUpFill;