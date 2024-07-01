function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStep = function SvgStep(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M772-367q-47 0-79-32.5T661-479q0-47 32-79.5t79-32.5q46 0 78.5 32.5T883-479q0 47-32.5 79.5T772-367Zm-410 78-42-43 114-116H76v-62h358L320-625l42-43 188 189-188 190Z",
    fill: "currentColor"
  }));
};
export default SvgStep;