function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCreditScoreFill = function SvgCreditScoreFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M598-80 428-250l43-43 127 127 240-240 42 44L598-80ZM140-501h680v-139H140v139ZM80-160v-640h800v299h-32L598-248 471-378 343-250l30 30v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgCreditScoreFill;