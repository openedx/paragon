function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAudioDescription = function SvgAudioDescription(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M50-330v-270l30-30h160l30 30v270h-60v-80H110v80H50Zm60-140h100v-100H110v100Zm260 140v-300h190l30 30v240l-30 30H370Zm60-60h100v-180H430v180Zm276 15-42-42q12-12 19-28t7-34.67q0-19.83-7-35.58T664-543l43-43q20 20 31.5 47.36 11.5 27.37 11.5 58.5Q750-449 738-422t-32 47Zm113 115-42-44q33.93-34.16 53.46-79.2Q850-428.24 850-480q0-52-19.54-96.81Q810.93-621.61 777-656l42-44q42 42 66.5 98.6 24.5 56.59 24.5 121 0 64.4-24.5 121.4T819-260Z",
    fill: "currentColor"
  }));
};
export default SvgAudioDescription;