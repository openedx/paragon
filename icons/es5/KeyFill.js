function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgKeyFill = function SvgKeyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-351q54 0 91.5-37.5T409-480q0-54-37.5-91.5T280-609q-54 0-91.5 37.5T151-480q0 54 37.5 91.5T280-351Zm0 111q-100 0-170-70T40-480q0-100 70-170t170-70q85 0 142.5 46.5T503-555h344l73 73-127 146-103-84-84 84-71-71h-32q-19 75-80.5 121T280-240Z",
    fill: "currentColor"
  }));
};
export default SvgKeyFill;