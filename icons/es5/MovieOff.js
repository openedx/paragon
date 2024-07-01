function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMovieOff = function SvgMovieOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h80l212 212H140v368h600l60 60H80Zm800-6-60-60v-362H458L246-800h78l74 152h130l-74-152h130l74 152h130l-74-152h166v634ZM813-61 61-813l43-43 752 752-43 43ZM470-404Zm169-3Z",
    fill: "currentColor"
  }));
};
export default SvgMovieOff;