function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgToolsFlatHeadFill = function SvgToolsFlatHeadFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-120v-60h320v60H320Zm0-120-40-280 80-320h240l80 320-40 280H320Zm29-310h262l-57-230H406l-57 230Z",
    fill: "currentColor"
  }));
};
export default SvgToolsFlatHeadFill;