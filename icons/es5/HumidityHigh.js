function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHumidityHigh = function SvgHumidityHigh(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-100q-133 0-226.5-91.71T160-415q0-63.14 24.5-120.77Q209-593.4 254-637.5L480-860l226 222.5q45 44.1 69.5 101.73T800-415q0 131.58-93.5 223.29Q613-100 480-100Z",
    fill: "currentColor"
  }));
};
export default SvgHumidityHigh;