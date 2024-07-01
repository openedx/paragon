function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTheatersFill = function SvgTheatersFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-120v-720h60v60h120v-60h280v60h120v-60h60v720h-60v-60H620v60H340v-60H220v60h-60Zm60-120h120v-120H220v120Zm0-180h120v-120H220v120Zm0-180h120v-120H220v120Zm400 360h120v-120H620v120Zm0-180h120v-120H620v120Zm0-180h120v-120H620v120Z",
    fill: "currentColor"
  }));
};
export default SvgTheatersFill;