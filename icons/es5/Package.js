function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPackage = function SvgPackage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m380-548 100-50 100 50v-232H380v232ZM280-280v-80h200v80H280ZM120-120v-720h720v720H120Zm60-660v600-600Zm0 600h600v-600H640v329l-160-80-160 80v-329H180v600Z",
    fill: "currentColor"
  }));
};
export default SvgPackage;