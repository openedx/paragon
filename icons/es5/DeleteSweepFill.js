function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDeleteSweepFill = function SvgDeleteSweepFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M600-230v-60h145v60H600Zm0-368v-60h280v60H600Zm0 184v-60h235v60H600ZM125-675H80v-60h170v-45h135v45h170v60h-45v475H125v-475Z",
    fill: "currentColor"
  }));
};
export default SvgDeleteSweepFill;