function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBubbles = function SvgBubbles(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m398-628 145 145v-103h60v206H397v-60h104L356-585l42-43Zm372 468q-45 0-77.5-32.5t-32.5-78q0-45.5 32.5-77.5t78-32q45.5 0 77.5 32.08 32 32.09 32 77.92 0 45-32.08 77.5Q815.83-160 770-160Zm-690 0v-640h800v360h-60v-300H140v520h460v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgBubbles;