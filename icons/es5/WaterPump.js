function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterPump = function SvgWaterPump(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M100-260h207q-29-23-52-53.5T218-380H100v120Zm379.79 0q91.21 0 155.71-64.29 64.5-64.29 64.5-155.5T635.71-635.5Q571.42-700 480.21-700T324.5-635.71Q260-571.42 260-480.21t64.29 155.71q64.29 64.5 155.5 64.5ZM742-580h118v-120H653q29 23 52 53.5t37 66.5ZM40-160v-320h60v40h103q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h380v-40h60v320h-60v-40H757q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H100v40H40Zm60-100v-120 120Zm760-320v-120 120ZM480-480Zm-.09 104q-28.91 0-49.41-20.56Q410-417.13 410-446q0-23 7-39t31-52l32-47 32 47q24 36 31 52t7 39q0 28.87-20.59 49.44Q508.82-376 479.91-376Z",
    fill: "currentColor"
  }));
};
export default SvgWaterPump;