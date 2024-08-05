function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEventNote = function SvgEventNote(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 10H7v2h10v-2Zm4-7h-3V1h-2v2H8V1H6v2H3v18h18V3Zm-2 16H5V8h14v11Zm-5-5H7v2h7v-2Z",
    fill: "currentColor"
  }));
};
export default SvgEventNote;