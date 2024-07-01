function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAutostop = function SvgAutostop(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M370-370v-220h220v220H370ZM487-40q-121 0-221-56.5T100-257v136H40v-239h238v60H144q57 95 147 147.5T487-100q121 0 218-70.5T840-356l59 13q-43 136-156.5 219.5T487-40ZM42-520q7-68 32-128.5T142-761l43 43q-35 45-56 95t-27 103H42Zm199-254-42-44q54-44 115-69t128-31v60q-52 5-101 25.5T241-774Zm478 0q-45-36-95-57.5T520-858v-60q68 6 128.5 31T761-818l-42 44Zm139 254q-5-51-28-103t-59-97l42-44q46 54 73 116.5T918-520h-60Z",
    fill: "currentColor"
  }));
};
export default SvgAutostop;