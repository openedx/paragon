function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShelfPosition = function SvgShelfPosition(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-121v-719h720v719H120Zm60-60h600v-141H180v141Zm470-201h130v-398H650v398Zm-470 0h130v-398H180v398Zm190 0h220v-398H370v398Z",
    fill: "currentColor"
  }));
};
export default SvgShelfPosition;