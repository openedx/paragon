function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPersonalPlaces = function SvgPersonalPlaces(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-120v-680h400q11 0 21 6t17 16l122 170-122 170q-7 10-17 16t-21 6H300v296h-60Zm60-356h331l95-132-95-132H300v264Zm0 0v-264 264Z",
    fill: "currentColor"
  }));
};
export default SvgPersonalPlaces;