function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgPlayCircleFilled = function SvgPlayCircleFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 14.5v-9l6 4.5-6 4.5Z",
    fill: "currentColor"
  }));
};
export default SvgPlayCircleFilled;