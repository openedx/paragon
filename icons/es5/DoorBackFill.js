function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDoorBackFill = function SvgDoorBackFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h80v-660h560v660h80v60H120Zm273-329q14.45 0 24.23-9.77Q427-468.55 427-483q0-14.45-9.77-24.23Q407.45-517 393-517q-14.45 0-24.23 9.77Q359-497.45 359-483q0 14.45 9.77 24.23Q378.55-449 393-449Z",
    fill: "currentColor"
  }));
};
export default SvgDoorBackFill;