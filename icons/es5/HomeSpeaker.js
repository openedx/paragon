function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHomeSpeaker = function SvgHomeSpeaker(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M375-120q-72 0-117-54.5T223-301l59-421q2-8 6-14t12-9l330-132q14-5 26.5 2t14.5 22l67 556q8 70-37 123.5T585-120H375Zm0-60h210q44 0 71.5-32.4T679-288l-14.57-120H298l-17 119q-6 44 21.5 76.5T375-180Zm-37-516-32 228h351l-41-339-278 111Zm142 288Zm2-60Zm-1 60v-60 60Z",
    fill: "currentColor"
  }));
};
export default SvgHomeSpeaker;