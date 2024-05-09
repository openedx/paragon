function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPropaneTankFill = function SvgPropaneTankFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-420v-140q0-57 34-99t86-56v-165h400v165q52 14 86 56t34 99v140H160ZM320-80q-66 0-113-47t-47-113v-120h640v120q0 66-47 113T640-80H320Zm20-640h100v-40h80v40h100v-100H340v100Z",
    fill: "currentColor"
  }));
};
export default SvgPropaneTankFill;