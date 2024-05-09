function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHowToVoteFill = function SvgHowToVoteFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-80v-258l135-149 43 43-118 129h600L669-441l43-43 128 146v258H120Zm365-262L243-585l298-298 242 243-298 298Zm-2-92 208-208-150-150-208 208 150 150Z",
    fill: "currentColor"
  }));
};
export default SvgHowToVoteFill;