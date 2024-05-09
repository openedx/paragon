function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOutpatientMed = function SvgOutpatientMed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m780-339-42-43 68-68H640v-59h165l-68-68 43-43 140 140.5L780-339ZM80-780v-60h480v60H80Zm190 510h100v-100h100v-100H370v-100H270v100H170v100h100v100ZM40-120v-600h560v600H40Zm280-300ZM100-180h440v-480H100v480Z",
    fill: "currentColor"
  }));
};
export default SvgOutpatientMed;