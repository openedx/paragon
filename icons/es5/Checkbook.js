function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCheckbook = function SvgCheckbook(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M237-363h335l60-60H237v60Zm0-178h231v-60H237v60Zm-97-159v439h330l-61 61H80v-560h800v149h-60v-89H140Zm775 220q5 5 5 12.5t-5 12.5l-37 37-50-50 39-39q5-5 10.5-5t10.5 5l27 27ZM530-120v-50l272-272 50 50-272 272h-50ZM140-700v439-439Z",
    fill: "currentColor"
  }));
};
export default SvgCheckbook;