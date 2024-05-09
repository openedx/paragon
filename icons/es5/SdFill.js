function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSdFill = function SvgSdFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h800v640H80Zm160-197h200v-139H290v-57h100v17h50v-67H240v140h150v56H290v-16h-50v66Zm280 0h178l22-23v-201l-22-22H520v246Zm50-50v-146h100v146H570Z",
    fill: "currentColor"
  }));
};
export default SvgSdFill;