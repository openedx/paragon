function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgInstallMobile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 18H7V6h7V1H5v22h14v-7h-2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14l5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z",
    fill: "currentColor"
  }));
}
export default SvgInstallMobile;