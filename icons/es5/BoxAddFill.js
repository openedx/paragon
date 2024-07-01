function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBoxAddFill = function SvgBoxAddFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-609l82-111h555l83 111v255q-19-7-38.02-10.5Q782.97-488 763-488q-35 0-66 10t-57 28v-224H320v342l160-80 90 45q-11 21-16.5 44.5T548-273q0 44 16.5 83.5T612-120H120Zm612-3v-120H612v-60h120v-120h60v120h120v60H792v120h-60ZM197-734h565l-36.41-46H233l-36 46Z",
    fill: "currentColor"
  }));
};
export default SvgBoxAddFill;