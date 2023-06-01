function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgCancelScheduleSend(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l9 2-9 2 .01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.27 14.03l-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z",
    fill: "currentColor"
  }));
}
export default SvgCancelScheduleSend;