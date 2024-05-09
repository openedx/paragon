function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWeightFill = function SvgWeightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-680q25.5 0 42.75-17.25T540-740q0-25.5-17.25-42.75T480-800q-25.5 0-42.75 17.25T420-740q0 25.5 17.25 42.75T480-680ZM148-120l80-560h148q-8-14-12-28.57-4-14.56-4-31.43 0-50 35-85t85-35q50 0 85 35t35 85q0 17-4 31.5T584-680h148l80 560H148Z",
    fill: "currentColor"
  }));
};
export default SvgWeightFill;