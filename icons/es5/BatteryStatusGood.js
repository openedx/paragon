function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBatteryStatusGood = function SvgBatteryStatusGood(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m638-127-99-99 42-42 57 56 141-141 42 42-183 184Zm-298-13Zm-60 60v-736h120v-64h160v64h120v363q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28H280Z",
    fill: "currentColor"
  }));
};
export default SvgBatteryStatusGood;