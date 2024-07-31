function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgJoin = function SvgJoin(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M640-260q92 0 156-64.49 64-64.5 64-156Q860-572 796-636q-64-64-156-64-30.51 0-59.33 8.04Q551.86-683.93 527-669q34 38 53.5 86T600-480q0 55-19.5 103T527-291q24.86 14.93 53.67 22.96Q609.49-260 640-260Zm-160-69q28-29 44-68.25t16-83Q540-524 524-563t-44-68q-28 29-44 68.25t-16 83Q420-436 436-397t44 68Zm-160 69q30.51 0 59.33-8.04Q408.14-276.07 433-291q-34-38-53.5-86T360-480q0-55 19.5-103t53.5-86q-24.86-14.93-53.67-22.96Q350.51-700 320-700q-91.3 0-155.65 64Q100-572 100-480.49q0 91.5 64.35 156Q228.7-260 320-260Zm0 60q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q45 0 85.5 13t74.5 37q34-24 74.5-37t85.5-13q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200q-45 0-85.5-13T480-250q-34 24-74.5 37T320-200Z",
    fill: "currentColor"
  }));
};
export default SvgJoin;