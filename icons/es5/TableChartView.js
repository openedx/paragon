function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTableChartView = function SvgTableChartView(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m289-87-42-42 269-270 140 140 216-215 42 42-258 258-140-140L289-87Zm-149-33H80v-740h720v290H140v450Zm0-510h600v-170H140v170Zm0 0v-170 170Z",
    fill: "currentColor"
  }));
};
export default SvgTableChartView;