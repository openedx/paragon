function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLocalActivityFill = function SvgLocalActivityFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m376-318 104-81 104 81-40-128 98-82H522l-42-122-42 122H318l98 82-40 128ZM80-160v-213q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-213h800v213q-37 7-61.5 37T794-480q0 40 24.5 69.5T880-373v213H80Z",
    fill: "currentColor"
  }));
};
export default SvgLocalActivityFill;