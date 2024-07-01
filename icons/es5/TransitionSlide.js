function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTransitionSlide = function SvgTransitionSlide(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-160v-640h240v640H40Zm60-59h120v-521H100v521Zm260 59v-640h560v640H360Zm60-59h440v-521H420v521Zm-200 0v-521 521Zm200 0v-521 521Z",
    fill: "currentColor"
  }));
};
export default SvgTransitionSlide;