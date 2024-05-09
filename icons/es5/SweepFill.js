function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSweepFill = function SvgSweepFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M411-240v-60h222v60H411Zm-170 0L15-466l43-42 183 183 395-395 42 43-437 437Zm332-175v-60h225v60H573Zm165-175v-60h222v60H738Z",
    fill: "currentColor"
  }));
};
export default SvgSweepFill;