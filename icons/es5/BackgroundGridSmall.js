function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBackgroundGridSmall = function SvgBackgroundGridSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-180h105v-105H180v105Zm165 0h105v-105H345v105Zm165 0h105v-105H510v105Zm165 0h105v-105H675v105ZM180-675h105v-105H180v105Zm0 165h105v-105H180v105Zm0 165h105v-105H180v105Zm165-330h105v-105H345v105Zm0 165h105v-105H345v105Zm0 165h105v-105H345v105Zm165-330h105v-105H510v105Zm0 165h105v-105H510v105Zm0 165h105v-105H510v105Zm165-330h105v-105H675v105Zm0 165h105v-105H675v105Zm0 165h105v-105H675v105ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgBackgroundGridSmall;