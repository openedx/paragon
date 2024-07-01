function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStrategyFill = function SvgStrategyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M560-80 320-220v-280l150-88v228h180v-228l150 88v280L560-80ZM220-520 80-600v-160l140-80 140 80v160l-140 80Zm310 100v-460h351l-73 110 73 110H590v240h-60Z",
    fill: "currentColor"
  }));
};
export default SvgStrategyFill;