function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBatteryPlusFill = function SvgBatteryPlusFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M655-80v-125H535v-60h120v-120h60v120h125v60H715v125h-60Zm-375 0v-736h120v-64h160v64h120v363q-8 0-15.07.46-7.07.47-14.14 1.4Q573-440 520.5-380 468-320 468-239q0 46 18.5 87T539-80H280Z",
    fill: "currentColor"
  }));
};
export default SvgBatteryPlusFill;