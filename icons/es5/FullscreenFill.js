function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFullscreenFill = function SvgFullscreenFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-193h60v133h133v60H120Zm527 0v-60h133v-133h60v193H647ZM120-647v-193h193v60H180v133h-60Zm660 0v-133H647v-60h193v193h-60Z",
    fill: "currentColor"
  }));
};
export default SvgFullscreenFill;