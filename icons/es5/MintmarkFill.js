function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMintmarkFill = function SvgMintmarkFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M532-120v-60h206L532-386v-83l247 247v-206h61v308H532ZM249-284v-42H122v-60h248v-146H122v-266h127v-42h60v42h122v60H182v146h249v266H309v42h-60Z",
    fill: "currentColor"
  }));
};
export default SvgMintmarkFill;