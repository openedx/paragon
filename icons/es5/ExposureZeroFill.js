function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgExposureZeroFill = function SvgExposureZeroFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-200q-100 0-160-79.5T260-480q0-121 60-200.5T480-760q100 0 160 79.5T700-480q0 121-60 200.5T480-200Zm0-62q76 0 114-65.5T632-480q0-87-38-152.5T480-698q-76 0-114 65.5T328-480q0 87 38 152.5T480-262Z",
    fill: "currentColor"
  }));
};
export default SvgExposureZeroFill;