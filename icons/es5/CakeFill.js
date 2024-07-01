function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCakeFill = function SvgCakeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-80v-319h720v319H120Zm87-379v-182h243v-64q-20-14-30.5-30.53-10.5-16.54-10.5-39.88 0-14.59 5.5-28.09T430-827l50-53 50 53q10 10 16 23.5t6 28.09q0 23.34-11 39.88Q530-719 510-705v64h243v182H207Z",
    fill: "currentColor"
  }));
};
export default SvgCakeFill;