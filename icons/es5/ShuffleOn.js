function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgShuffleOn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 1v22h22V1H1zm4.41 3l5.18 5.17-1.42 1.41L4 5.41 5.41 4zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5V20zm0-10.5l-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20v5.5z",
    fill: "currentColor"
  }));
}
export default SvgShuffleOn;