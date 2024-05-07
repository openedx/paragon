function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMarkAsUnread = function SvgMarkAsUnread(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8v13h17V8H5zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10v2z",
    fill: "currentColor"
  }));
};
export default SvgMarkAsUnread;