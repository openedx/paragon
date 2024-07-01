function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSsidChartFill = function SvgSsidChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M481-120 233-360l-113 81v-74l119-85 245 238 172-137h184v60H676L481-120Zm0-386L306-681 120-546v-74l192-140 175 175 353-255v74L481-506Z",
    fill: "currentColor"
  }));
};
export default SvgSsidChartFill;