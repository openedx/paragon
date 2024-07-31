function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMobileFriendlyFill = function SvgMobileFriendlyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-40v-880h560v206h-60v-56H220v580h440v-56h60v206H160Zm438-280L428-490l43-42 127 127 239-239 43 42-282 282Z",
    fill: "currentColor"
  }));
};
export default SvgMobileFriendlyFill;