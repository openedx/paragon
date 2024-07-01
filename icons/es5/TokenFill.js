function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTokenFill = function SvgTokenFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M366-578 153-703l327-177 327 177-213 125q-23-23-52.5-37.5T480-630q-32 0-61.5 14.5T366-578Zm84 481L120-286v-368l217 129q-4 11-5.5 22.5T330-480q0 53 34 93t86 54v236Zm30-293q-38 0-64-26t-26-64q0-38 26-64t64-26q38 0 64 26t26 64q0 38-26 64t-64 26Zm30 293v-236q52-14 86-54t34-93q0-11-1.5-22.5T623-525l217-129v368L510-97Z",
    fill: "currentColor"
  }));
};
export default SvgTokenFill;