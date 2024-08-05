function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMedicalInformation = function SvgMedicalInformation(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 7h-7V2H9v5H2v15h20V7zM11 4h2v5h-2V4zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z",
    fill: "currentColor"
  }));
};
export default SvgMedicalInformation;