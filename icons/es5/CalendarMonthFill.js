function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCalendarMonthFill = function SvgCalendarMonthFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M440-400v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM440-240v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM120-80v-740h125v-60h65v60h340v-60h65v60h125v740H120Zm60-60h600v-430H180v430Z",
    fill: "currentColor"
  }));
};
export default SvgCalendarMonthFill;