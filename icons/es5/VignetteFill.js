function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVignetteFill = function SvgVignetteFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h800v640H80Zm401-159q99.63 0 171.82-47.5Q725-414 725-480t-72.18-113.5Q580.63-641 481-641t-171.82 47.5Q237-546 237-480t72.18 113.5Q381.37-319 481-319Z",
    fill: "currentColor"
  }));
};
export default SvgVignetteFill;