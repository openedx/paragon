function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgElectricMeterFill = function SvgElectricMeterFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M360-80v-102q-106-37-173-129.5T120-522q0-75 28.5-140.5t77-114q48.5-48.5 114-77T479-882q74 0 140 28.5t115 77q49 48.5 77.5 114T840-522q0 118-67.5 209.5T600-183v103h-60v-87q-15 2-30 3.5t-31 1.5q-15 0-30-1.5t-29-3.5v87h-60Zm-40-530h320v-60H320v60Zm123 323 113-113-50-50 57-57-46-46-113 113 50 50-57 57 46 46Z",
    fill: "currentColor"
  }));
};
export default SvgElectricMeterFill;