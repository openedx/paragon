function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHeatPumpFill = function SvgHeatPumpFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M460-271v-161L346-318q23 21 52.5 33t61.5 14Zm40 0q32-2 61-14.5t53-32.5L500-432v161Zm142-75q21-24 33-53t14-61H528l114 114ZM528-500h162q-2-32-15-60.5T642-614L528-500Zm-28-28 114-114q-24-20-53-32.5T500-689v161Zm-20 78q13 0 21.5-8.5T510-480q0-13-8.5-21.5T480-510q-13 0-21.5 8.5T450-480q0 13 8.5 21.5T480-450Zm-20-78v-161q-32 1-61 14t-53 33l114 114Zm-189 28h161L318-614q-20 24-32.5 53T271-500Zm47 154 114-114H271q2 32 14 61t33 53ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgHeatPumpFill;