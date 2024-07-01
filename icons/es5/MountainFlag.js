function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMountainFlag = function SvgMountainFlag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-366Zm-153-79 75 50 78-39 77 40 75-50-47-96H374l-47 95ZM177-140h606L659-390l-97 65-82-41-82 40-98-65-123 251ZM80-80l256-520h114v-280h254l-35 70 35 70H510v140h110L880-80H80Z",
    fill: "currentColor"
  }));
};
export default SvgMountainFlag;