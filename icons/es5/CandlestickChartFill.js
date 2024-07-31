function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCandlestickChartFill = function SvgCandlestickChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-160v-90h-80v-460h80v-90h60v90h80v460h-80v90h-60Zm340 0v-210h-80v-260h80v-170h60v170h80v260h-80v210h-60Z",
    fill: "currentColor"
  }));
};
export default SvgCandlestickChartFill;