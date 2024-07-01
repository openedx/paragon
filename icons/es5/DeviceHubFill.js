function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDeviceHubFill = function SvgDeviceHubFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-180h154l176-176v-149q-35-12-57.5-40.65T370-730q0-45.83 32.12-77.92 32.12-32.08 78-32.08T558-807.92q32 32.09 32 77.92 0 35.7-22.5 64.35Q545-637 510-625v149l176 176h154v180H660v-116L480-416 300-236v116H120Z",
    fill: "currentColor"
  }));
};
export default SvgDeviceHubFill;