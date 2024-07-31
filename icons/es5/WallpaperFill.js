function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWallpaperFill = function SvgWallpaperFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-330h60v270h270v60H120Zm390 0v-60h270v-270h60v330H510ZM237-268l118-152 93 127 132-171 147 196H237ZM120-510v-330h330v60H180v270h-60Zm660 0v-270H510v-60h330v330h-60Zm-156-60q-23.4 0-38.7-15.3Q570-600.6 570-624q0-23.4 15.3-38.7Q600.6-678 624-678q23.4 0 38.7 15.3Q678-647.4 678-624q0 23.4-15.3 38.7Q647.4-570 624-570Z",
    fill: "currentColor"
  }));
};
export default SvgWallpaperFill;