function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOpenInBrowserFill = function SvgOpenInBrowserFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H570v-60h210v-540H180v540h210v60H120Zm330 0v-284l-83 83-43-43 156-156 156 156-43 43-83-83v284h-60Z",
    fill: "currentColor"
  }));
};
export default SvgOpenInBrowserFill;