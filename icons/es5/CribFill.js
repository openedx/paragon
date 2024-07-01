function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCribFill = function SvgCribFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-140q23 0 45.5-3t44.5-10v-167H390v167q22 7 44.5 10t45.5 3Zm0 60q-80 0-153-30t-130-87l43-43q20 20 42.5 35t47.5 28v-143H160v-320q0-66 47-113t113-47h160v200h320v280H630v143q25-12 47-28t42-36l43 43q-57 56-129.5 87T480-80Z",
    fill: "currentColor"
  }));
};
export default SvgCribFill;