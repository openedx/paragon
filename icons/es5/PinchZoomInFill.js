function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPinchZoomInFill = function SvgPinchZoomInFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m54-476-28-28 130-131H55v-40h170v170h-40v-101L54-476Zm230-258v-170h40v101l131-131 29 29-131 131h101v40H284ZM544-40 304-280l39-57 137 37v-370h60v320h67v-180h60v180h66v-140h60v140h67v-60h60v370H544Z",
    fill: "currentColor"
  }));
};
export default SvgPinchZoomInFill;