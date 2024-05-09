function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgElevatorFill = function SvgElevatorFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-230h120v-170h40v-190H240v190h40v170Zm60-394q23 0 39.5-16.5T396-680q0-23-16.5-39.5T340-736q-23 0-39.5 16.5T284-680q0 23 16.5 39.5T340-624Zm175 94h200L615-690 515-530Zm100 260 100-160H515l100 160ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgElevatorFill;