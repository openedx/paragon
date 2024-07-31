function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGradientFill = function SvgGradientFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm317-404v86h85v-86h-85Zm-171 0v86h85v-86h-85Zm85 86v86h86v-86h-86Zm171 0v86h86v-86h-86Zm-342 0v86h86v-86h-86Zm428-86v86h86v86h86v-86h-86v-86h-86ZM265.5-352v86H180v86h85.5v-86H351v86h85.75v-86h85.75v86h85.75v-86H694v86h86v-86h-86v-86h-86v86h-86v-86h-85.5v86H351v-86h-85.5ZM780-524v86-86Zm0 172v86-86Z",
    fill: "currentColor"
  }));
};
export default SvgGradientFill;