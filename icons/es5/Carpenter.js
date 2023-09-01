function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgCarpenter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 1.5L3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07L7 1.5zm5.66 16.97l4.24-4.24 1.41 1.41-4.24 4.24-1.41-1.41z",
    fill: "currentColor"
  }));
}
export default SvgCarpenter;