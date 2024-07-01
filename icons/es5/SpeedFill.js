function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpeedFill = function SvgSpeedFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M418-340q25 25 63 23.5t55-27.5l221-333-333 221q-26 18-28.5 54.5T418-340ZM192-160q-18 0-34-8.5T134-193q-26-48-40-100T80-399q0-83 31.5-156T197-682.5q54-54.5 126.5-86T478-800q83 0 156.5 31.5t128 86Q817-628 848.5-555T880-399q0 54-13 106.5T827-193q-9 16-25 24.5t-34 8.5H192Z",
    fill: "currentColor"
  }));
};
export default SvgSpeedFill;