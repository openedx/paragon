function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBloodPressure = function SvgBloodPressure(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170H80Zm381 410H140q-24 0-42-18t-18-42v-170h60v170h297q4 16 10 31t14 29Zm19-320ZM679.89-90Q601-90 545.5-145.61q-55.5-55.6-55.5-134.5 0-78.89 55.61-134.39 55.6-55.5 134.5-55.5 78.89 0 134.39 55.61 55.5 55.6 55.5 134.5 0 78.89-55.61 134.39Q758.79-90 679.89-90ZM688-260l91-91-28-28-91 91 28 28ZM80-450v-60h137l63 123 160-320 106 215q-13 8-25 18.5T498-452l-59-120-160 320-98-198H80Z",
    fill: "currentColor"
  }));
};
export default SvgBloodPressure;