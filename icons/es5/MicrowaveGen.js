function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMicrowaveGen = function SvgMicrowaveGen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm60-60h400v-400H200v400Zm60-60v-280h280v280H260Zm430-280h60v-60h-60v60Zm0 170h60v-60h-60v60Zm0 170h60v-60h-60v60Zm-550 60v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgMicrowaveGen;