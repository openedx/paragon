function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStreetviewFill = function SvgStreetviewFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M720-520q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520ZM147-147q-13-9-20-23t-7-30v-560q0-34 23-57t57-23h269q-14 25-21.5 55t-7.5 65q0 56 22 108t60 90L147-147Zm333 27v-218q0-44 26.5-77.5T576-457q32-8 69-10.5t75-2.5q35 0 64.5 2t55.5 8v260q0 34-23 57t-57 23H480Z",
    fill: "currentColor"
  }));
};
export default SvgStreetviewFill;