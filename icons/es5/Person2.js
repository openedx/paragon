function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgPerson2(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 004 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26z",
    fill: "currentColor"
  }));
}
export default SvgPerson2;