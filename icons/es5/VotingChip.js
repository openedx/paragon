function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVotingChip = function SvgVotingChip(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-60h320q91.3 0 155.65-64.29Q860-388.58 860-479.79T795.65-635.5Q731.3-700 640-700H320q-91.3 0-155.65 64.29Q100-571.42 100-480.21t64.35 155.71Q228.7-260 320-260Zm20-110h40v-90h90v-40h-90v-90h-40v90h-90v40h90v90Zm290 0h40v-220H570v40h60v180ZM480-480Z",
    fill: "currentColor"
  }));
};
export default SvgVotingChip;