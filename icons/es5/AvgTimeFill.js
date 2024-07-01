function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAvgTimeFill = function SvgAvgTimeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M360-860v-60h240v60H360Zm40 513-62-123H121q11-140 114-235.5T480-801q67 0 125.5 22T710-717l51-51 43 43-51 51q32 36 56.5 86T839-470H659l-99-197-160 320Zm80 266q-142 0-244.5-95T121-410h180l99 197 160-320 62 123h217q-12 139-114.5 234T480-81Z",
    fill: "currentColor"
  }));
};
export default SvgAvgTimeFill;