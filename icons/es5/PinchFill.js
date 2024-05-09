function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPinchFill = function SvgPinchFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M400-750v-102L108-560h102v40H40v-170h40v102l292-292H270v-40h170v170h-40ZM544-40 304-280l39-57 137 37v-370h60v320h67v-180h60v180h66v-140h60v140h67v-60h60v370H544Z",
    fill: "currentColor"
  }));
};
export default SvgPinchFill;