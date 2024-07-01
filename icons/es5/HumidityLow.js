function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHumidityLow = function SvgHumidityLow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-100q-133 0-226.5-91.71T160-415q0-63.14 24.5-120.77Q209-593.4 254-637.5L480-860l226 222.5q45 44.1 69.5 101.73T800-415q0 131.58-93.5 223.29Q613-100 480-100Zm-.24-60Q588-160 664-234.07q76-74.06 76-181.11Q740-466 720.5-512 701-558 666-593L480-776 294-593q-35 35-54.5 81-19.5 45.99-19.5 96.86Q220-308 295.76-234q75.77 74 184 74Z",
    fill: "currentColor"
  }));
};
export default SvgHumidityLow;