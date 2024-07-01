function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgComicBubble = function SvgComicBubble(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m440-831-91.21 91.21H220.21v128.58L129-520l91.21 91.21v128.58h128.58L440-209l104-104 210 107-108-209 105-105-91.21-91.21v-128.58H531.21L440-831Zm0-85 116 116h164v164l116 116-116 116 129 253-40 40-253-129-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Zm1 398Z",
    fill: "currentColor"
  }));
};
export default SvgComicBubble;