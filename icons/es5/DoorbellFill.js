function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDoorbellFill = function SvgDoorbellFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-270q13 0 23-8.5t12-21.5h-70q2 13 12 21.5t23 8.5Zm-155-50h310v-30h-40v-99q0-42.6-24-77.46-24-34.86-66-44.54v-39h-50v39q-42 9.68-66 44.54T365-449v99h-40v30ZM160-120v-480l320-240 320 240v480H160Z",
    fill: "currentColor"
  }));
};
export default SvgDoorbellFill;