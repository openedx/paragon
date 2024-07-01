function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGrid4X4Fill = function SvgGrid4X4Fill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M215-80v-135H80v-60h135v-175H80v-60h135v-175H80v-60h135v-135h60v135h175v-135h60v135h175v-135h60v135h135v60H745v175h135v60H745v175h135v60H745v135h-60v-135H510v135h-60v-135H275v135h-60Zm60-195h175v-175H275v175Zm235 0h175v-175H510v175ZM275-510h175v-175H275v175Zm235 0h175v-175H510v175Z",
    fill: "currentColor"
  }));
};
export default SvgGrid4X4Fill;