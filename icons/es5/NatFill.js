function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNatFill = function SvgNatFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M156-360q-48 0-82-34t-34-82q0-48 34-82t82-34q40 0 72 20t43 62h207v60H271q-11 42-43 66t-72 24Zm0-60q24 0 40-16t16-40q0-24-16-40t-40-16q-24 0-40 16t-16 40q0 24 16 40t40 16Zm44 340v-60q143 0 241.5-98.5T540-480q0-143-98.5-241.5T200-820v-60q153 0 271 104.5T600-510h206l-78-78 43-43 151 151-151 151-43-43 78-78H600q-11 161-129 265.5T200-80Z",
    fill: "currentColor"
  }));
};
export default SvgNatFill;