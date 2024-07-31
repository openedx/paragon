function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgApiFill = function SvgApiFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-375 375-480l105-105 105 105-105 105Zm-85-294-83-83 168-168 168 168-83 83-85-85-85 85ZM208-312 40-480l168-168 83 83-85 85 85 85-83 83Zm544 0-83-83 85-85-85-85 83-83 168 168-168 168ZM480-40 312-208l83-83 85 85 85-85 83 83L480-40Z",
    fill: "currentColor"
  }));
};
export default SvgApiFill;