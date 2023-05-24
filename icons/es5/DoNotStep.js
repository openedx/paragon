function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgDoNotStep(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1.39 4.22l8.24 8.24-.69.72-2.07-2.08c-.11.4-.26.78-.45 1.12l1.75 1.75-.69.72-1.63-1.63c-.24.29-.5.56-.77.8l1.63 1.63-.7.72-1.74-1.74c-1.44.96-2.93 1.35-3.27 1.45V20h9.5l3.33-3.33 5.94 5.94 1.41-1.41L2.81 2.81 1.39 4.22zm17.12 11.46l-1.41-1.41 4.48-4.48L23 11.2l-4.49 4.48zm2.37-6.6l-4.48 4.48-7.1-7.09L13.8 2l7.08 7.08z",
    fill: "currentColor"
  }));
}
export default SvgDoNotStep;