function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBatteryPlus = function SvgBatteryPlus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M340-140Zm-60 60v-736h120v-64h160v64h120v363q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28H280Zm375 0v-125H535v-60h120v-120h60v120h125v60H715v125h-60Z",
    fill: "currentColor"
  }));
};
export default SvgBatteryPlus;