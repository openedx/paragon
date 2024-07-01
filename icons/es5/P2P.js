function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgP2P = function SvgP2P(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-720h350v264h-60v-81H140v354h290v183H80Zm450 80v-263h60v80h230v-353H530v-184h350v720H530ZM140-220h230v-63H140v63Zm450 80h230v-63H590v63ZM140-757h230v-63H140v63Zm450 81h230v-64H590v64ZM140-220v-63 63Zm450 80v-63 63ZM140-757v-63 63Zm450 81v-64 64ZM290-450v-60h60v60h-60Zm160 0v-60h60v60h-60Zm160 0v-60h60v60h-60Z",
    fill: "currentColor"
  }));
};
export default SvgP2P;