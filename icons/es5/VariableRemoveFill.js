function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVariableRemoveFill = function SvgVariableRemoveFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-280v-400h720v176q-11-2-21-3.5t-21-1.5q-78 0-132.5 54.5T611-322q0 11 1.5 21t3.5 21H120Zm593 85-42-42 85-85-85-85 42-42 85 85 85-85 42 42-85 85 85 85-42 42-85-85-85 85Z",
    fill: "currentColor"
  }));
};
export default SvgVariableRemoveFill;