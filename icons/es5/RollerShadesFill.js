function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRollerShadesFill = function SvgRollerShadesFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-60h80v-660h640v660h80v60H80Zm140-60h520v-270H510v88q14 8 22 21.75t8 30.25q0 24.86-17.6 42.43T479.9-250q-24.9 0-42.4-17.57T420-310q0-16.85 8-30.43Q436-354 450-362v-88H220v270Z",
    fill: "currentColor"
  }));
};
export default SvgRollerShadesFill;