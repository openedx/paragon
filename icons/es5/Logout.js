function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLogout = function SvgLogout(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 5h7V3H3v18h9v-2H5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 12-4-4v3H9v2h8v3z",
    fill: "currentColor"
  }));
};
export default SvgLogout;