function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDeckFill = function SvgDeckFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-80v-520H80l400-280 400 280H510v520h-60Zm-330 0v-211L88-466l58-10 32 166h162v230h-60v-170H180v170h-60Zm500 0v-230h162l32-166 58 10-32 175v211h-60v-170H680v170h-60Z",
    fill: "currentColor"
  }));
};
export default SvgDeckFill;