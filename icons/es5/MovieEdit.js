function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMovieEdit = function SvgMovieEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-220v-368 368Zm-60 60v-640h60l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h172v154l-58 58H140v368h360v60H80Zm480 40v-123l263-262 122 122-262 263H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z",
    fill: "currentColor"
  }));
};
export default SvgMovieEdit;