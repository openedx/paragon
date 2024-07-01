function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBubbleChartFill = function SvgBubbleChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M584.88-120Q539-120 507-152.12q-32-32.12-32-78T507.12-308q32.12-32 78-32T663-307.88q32 32.12 32 78T662.88-152q-32.12 32-78 32Zm80.06-290Q575-410 512.5-472.56 450-535.13 450-625.06q0-89.94 62.56-152.44 62.57-62.5 152.5-62.5 89.94 0 152.44 62.56 62.5 62.57 62.5 152.5 0 89.94-62.56 152.44-62.57 62.5-152.5 62.5ZM275-237q-65 0-110-45t-45-110q0-65 45-110t110-45q65 0 110 45t45 110q0 65-45 110t-110 45Z",
    fill: "currentColor"
  }));
};
export default SvgBubbleChartFill;