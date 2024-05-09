function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStackedEmail = function SvgStackedEmail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-240v-600h760v600H160Zm380-205L220-706v406h640v-406L540-445Zm0-74 320-261H220l320 261ZM40-120v-619h60v559h720v60H40Zm820-660H220h640Z",
    fill: "currentColor"
  }));
};
export default SvgStackedEmail;