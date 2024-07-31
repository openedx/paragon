function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMouseFill = function SvgMouseFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-117 0-198.5-81.5T200-360v-200h560v200q0 117-81.5 198.5T480-80ZM200-620q0-108 71.5-187.5T450-898v278H200Zm310 0v-278q107 11 178.5 90.5T760-620H510Z",
    fill: "currentColor"
  }));
};
export default SvgMouseFill;