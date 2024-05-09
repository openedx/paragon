function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDoorOpen = function SvgDoorOpen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M440-450q13 0 21.5-9t8.5-21q0-13-8.5-21.5T440-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9ZM260-120v-60l280-49v-499l-280-43v-59l340 59v591l-340 60Zm-140 0v-60h80v-650h560v650h80v60H120Zm140-60h440v-590H260v590Z",
    fill: "currentColor"
  }));
};
export default SvgDoorOpen;