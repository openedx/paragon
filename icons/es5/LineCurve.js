function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLineCurve = function SvgLineCurve(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M730-160q0-118.17-45-222.09Q640-486 563-563T382.09-685Q278.17-730 160-730v-60q131 0 245.44 49.61 114.43 49.6 199.89 135.06 85.46 85.46 135.06 199.89Q790-291 790-160h-60Z",
    fill: "currentColor"
  }));
};
export default SvgLineCurve;