function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgThermometerFill = function SvgThermometerFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120q-75.53 0-128.77-53.24Q298-226.47 298-302q0-49.1 24-91.55Q346-436 388-462v-286q0-38.33 26.76-65.17 26.77-26.83 65-26.83Q518-840 545-813.17q27 26.84 27 65.17v286q42 26 66 68.45T662-302q0 75.53-53.23 128.76Q555.53-120 480-120Zm-32-449h64v-179q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v179Z",
    fill: "currentColor"
  }));
};
export default SvgThermometerFill;