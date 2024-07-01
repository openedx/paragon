function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgApprovalFill = function SvgApprovalFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-80v-320h640v320H160Zm60-160h520v-100H220v100Zm260-160L281-680q0-83 58.21-141.5T480-880q82.59 0 140.79 58.5Q679-763 679-680L480-400Z",
    fill: "currentColor"
  }));
};
export default SvgApprovalFill;