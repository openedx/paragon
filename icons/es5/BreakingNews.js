function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBreakingNews = function SvgBreakingNews(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M231-282h60v-60h-60v60Zm0-170h60v-231h-60v231Zm219 175h279v-60H450v60Zm0-175h279v-60H450v60Zm0-171h279v-60H450v60ZM72-120v-720h816v720H72Zm60-60h696v-600H132v600Zm0 0v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgBreakingNews;