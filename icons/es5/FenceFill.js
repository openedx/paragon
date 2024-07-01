function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFenceFill = function SvgFenceFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M210-160v-170h-90v-60h90v-100h-90v-60h90v-140l110-110 80 80 81-80 80 80 80-80 110 110v140h89v60h-89v100h89v60h-89v170H210Zm60-390h100v-115l-50-50-50 50v115Zm160 0h100v-115l-50-50-50 50v115Zm161 0h99v-115l-50-50-49 49v116ZM270-390h100v-100H270v100Zm160 0h100v-100H430v100Zm161 0h99v-100h-99v100ZM270-220h100v-110H270v110Zm160 0h100v-110H430v110Zm161 0h99v-110h-99v110Z",
    fill: "currentColor"
  }));
};
export default SvgFenceFill;