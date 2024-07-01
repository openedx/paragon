function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMeetingRoomFill = function SvgMeetingRoomFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h92v-660h390v45h147v615h91v60H689v-615h-87v615H120Zm331-320q17 0 28.5-11.5T491-480q0-17-11.5-28.5T451-520q-17 0-28.5 11.5T411-480q0 17 11.5 28.5T451-440Z",
    fill: "currentColor"
  }));
};
export default SvgMeetingRoomFill;