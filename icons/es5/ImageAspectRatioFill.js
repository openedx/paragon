function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgImageAspectRatioFill = function SvgImageAspectRatioFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M241-499h60v-60h-60v60Zm170 0h60v-60h-60v60Zm168 175h60v-60h-60v60Zm0-175h60v-60h-60v60ZM80-160v-640h800v640H80Z",
    fill: "currentColor"
  }));
};
export default SvgImageAspectRatioFill;