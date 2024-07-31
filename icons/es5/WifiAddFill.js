function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWifiAddFill = function SvgWifiAddFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120 0-600q99-94 221-147t259-53q137 0 259 53t221 147L827-467q-17-6-35-9t-36-2q-85 2-145 62t-62 145q-1 18 2 36t9 35l-80 80Zm260 0v-120H620v-60h120v-120h60v120h120v60H800v120h-60Z",
    fill: "currentColor"
  }));
};
export default SvgWifiAddFill;