function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgLightbulbCircle = function SvgLightbulbCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zm3-2.5H9V15h6v1.5zm-.03-2.5H9.03A4.966 4.966 0 0 1 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.64-.8 3.09-2.03 4z",
    fill: "currentColor"
  }));
};
export default SvgLightbulbCircle;