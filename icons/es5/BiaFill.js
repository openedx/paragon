function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBiaFill = function SvgBiaFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M260-600h146q-3-9-4.5-19t-1.5-21q0-17 4-31.5t11-28.5H260v100Zm380 60q66 0 123-21.5t57-78.5q0-57-57-78.5T640-740q-66 0-123 21.5T460-640q0 57 57 78.5T640-540ZM80-160v-440h120v-160h275q34-20 77-30t88-10q91 0 165.5 39.5T880-640v480H630v-190h-60v190H470v-190h-60v190H310v-190h-60v190H80Z",
    fill: "currentColor"
  }));
};
export default SvgBiaFill;