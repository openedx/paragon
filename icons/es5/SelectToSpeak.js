function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSelectToSpeak = function SvgSelectToSpeak(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M560-131v-62q97-28 158.5-107.5T780-481q0-101-61-181T560-769v-62q124 28 202 125.5T840-481q0 127-78 224.5T560-131Zm-80-29L280-360H120v-240h160l200-200v640Zm60-152v-337q55 17 87.5 64T660-480q0 57-33 104t-87 64Zm-120 1v-337L307-540H180v120h127l113 109ZM40-688v-232h232v60H100v172H40ZM688-40v-60h172v-172h60v232H688ZM300-480Z",
    fill: "currentColor"
  }));
};
export default SvgSelectToSpeak;