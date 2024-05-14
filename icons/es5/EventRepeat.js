function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEventRepeat = function SvgEventRepeat(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 12V4h-3V2h-2v2H8V2H6v2H3v18h9v-2H5V10h14v2h2zm-5.36 8a3.504 3.504 0 0 0 6.86-1c0-1.93-1.57-3.5-3.5-3.5-.95 0-1.82.38-2.45 1H18V18h-4v-4h1.5v1.43c.9-.88 2.14-1.43 3.5-1.43 2.76 0 5 2.24 5 5a5.002 5.002 0 0 1-9.9 1h1.54z",
    fill: "currentColor"
  }));
};
export default SvgEventRepeat;