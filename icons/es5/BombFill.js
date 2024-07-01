function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBombFill = function SvgBombFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M346-48q-125 0-212.5-88.5T46-350q0-125 87-211.5T345-648h12l57-100 91 53 5-8q23-39 66.5-50.5T660-743l26 15-30 52-26-15q-18-11-38.5-5.5T561-673l-4 8 99 57-56 100q23 36 34.5 76.5T646-348q0 125-87.5 212.5T346-48Zm474-570v-60h100v60H820ZM590-848v-100h60v100h-60Zm195 77-42-42 71-71 42 42-71 71Z",
    fill: "currentColor"
  }));
};
export default SvgBombFill;