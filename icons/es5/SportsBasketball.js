function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgSportsBasketball(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.09 11h4.86a9.951 9.951 0 00-1.54-4.4 5.987 5.987 0 00-3.32 4.4zM6.91 11a5.987 5.987 0 00-3.32-4.4A9.951 9.951 0 002.05 11h4.86zm8.16 0a7.994 7.994 0 014.06-6A9.969 9.969 0 0013 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 004.87 5a7.994 7.994 0 014.06 6zm6.14 2H13v8.95A9.943 9.943 0 0019.13 19a7.994 7.994 0 01-4.06-6zM3.59 17.4A6.029 6.029 0 006.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 003.32 4.4 9.951 9.951 0 001.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 01-4.06 6A9.969 9.969 0 0011 21.95V13H8.93z",
    fill: "currentColor"
  }));
}
export default SvgSportsBasketball;