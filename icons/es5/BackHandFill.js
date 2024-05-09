function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBackHandFill = function SvgBackHandFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M507-40q-93 0-171.5-47.5T209-215L60-463l57-57 163 121v-441h60v350h107v-430h60v430h107v-390h60v390h106v-310h60v432q0 137-97.5 232.5T507-40Z",
    fill: "currentColor"
  }));
};
export default SvgBackHandFill;