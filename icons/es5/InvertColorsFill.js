function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgInvertColorsFill = function SvgInvertColorsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120q-132 0-226-91.5T160-435q0-66 25-122.5T254-658l226-222 226 222q44 44 69 100.5T800-435q0 131-93.5 223T480-120Zm0-60v-616L294-613q-36 36-55 80t-19 98q0 107 76.5 181T480-180Z",
    fill: "currentColor"
  }));
};
export default SvgInvertColorsFill;