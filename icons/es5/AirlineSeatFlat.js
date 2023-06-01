function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgAirlineSeatFlat(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 7v6H9V7h13zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 00-.04-4.24 3 3 0 00-4.24.04 3 3 0 00.04 4.24 3 3 0 004.24-.04z",
    fill: "currentColor"
  }));
}
export default SvgAirlineSeatFlat;