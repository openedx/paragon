function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHealthMetricsFill = function SvgHealthMetricsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-80v-200H80v-170h264l91 134h25l70-217 56 83h294v170H680v200H280Zm152-347-56-83H80v-170h200v-200h400v200h200v170H618l-91-135h-26l-69 218Z",
    fill: "currentColor"
  }));
};
export default SvgHealthMetricsFill;