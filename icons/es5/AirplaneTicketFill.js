function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAirplaneTicketFill = function SvgAirplaneTicketFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-213q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-213h800v640H80Zm268-165 368-101q17-5 25-16t3-28q-5-17-18-23.5t-29-2.5l-103 27-166-162-52 12 103 181-111 31-52-43-29 10 61 115Z",
    fill: "currentColor"
  }));
};
export default SvgAirplaneTicketFill;