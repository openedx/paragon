function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlexDirection = function SvgFlexDirection(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-280h360v280H80Zm0-360v-280h360v280H80Zm60-60h240v-160H140v160Zm594 420L548-346l42-42 114 113v-525h60v525l114-113 42 42-186 186Z",
    fill: "currentColor"
  }));
};
export default SvgFlexDirection;