function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRightClick = function SvgRightClick(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m492-240 19-63q64-11 106.5-60.5T660-480q0-75-52.5-127.5T480-660q-68 0-117 42.5T303-511l-63 20q5-97 74-163t166-66q100 0 170 70t70 170q0 97-66 166t-162 74ZM139-60l-79-79 171-171-151-50 400-120L360-80l-50-151L139-60Z",
    fill: "currentColor"
  }));
};
export default SvgRightClick;