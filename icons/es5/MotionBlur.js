function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMotionBlur = function SvgMotionBlur(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M270-280v-60h267q-21-21-36-51t-19-59H350v-60h132q4-28 18.5-57.5T537-620H120v-60h560q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H270Zm409.76-60Q738-340 779-380.76q41-40.77 41-99Q820-538 779.24-579q-40.77-41-99-41Q622-620 581-579.24q-41 40.77-41 99Q540-422 580.76-381q40.77 41 99 41ZM80-450v-60h240v60H80Zm40 170v-60h120v60H120Z",
    fill: "currentColor"
  }));
};
export default SvgMotionBlur;