function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTagFill = function SvgTagFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m239-160 40-159H120l15-60h159l51-202H186l15-60h159l39-159h59l-39 159h203l39-159h59l-39 159h159l-15 60H666l-51 202h159l-15 60H600l-40 159h-59l40-159H338l-40 159h-59Zm114-219h203l51-202H404l-51 202Z",
    fill: "currentColor"
  }));
};
export default SvgTagFill;