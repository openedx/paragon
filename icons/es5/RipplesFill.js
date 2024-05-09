function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRipplesFill = function SvgRipplesFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M549-780q-13 21-19 44.48-6 23.47-6 47.52 0 66.83 47.59 114.41Q619.17-526 686-526q24.73 0 48.86-6Q759-538 780-551v-229H549ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgRipplesFill;