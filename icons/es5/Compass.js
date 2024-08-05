function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCompass = function SvgCompass(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-5.5-2.5 7.51-3.49L15.5 4.5 7.99 7.99 4.5 15.5ZM10 8.9c.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1Z",
    fill: "currentColor"
  }));
};
export default SvgCompass;