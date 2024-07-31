function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgManga = function SvgManga(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h800v640H80Zm271-60-58-80 74-101.87V-528l120-38 74-102 119 39 140-47v-64H140v520h211Zm76-264Zm-2 264h395v-359l-27-23-113 35-96-31-60.3 82.62L427-484v101.88L367-300l58 80Z",
    fill: "currentColor"
  }));
};
export default SvgManga;