function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTrip = function SvgTrip(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-600h240v-160h320v160h240v600H80Zm300-600h200v-100H380v100Zm-133 60H140v480h107v-480Zm407 480v-480H307v480h347Zm60-480v480h106v-480H714ZM480-425Z",
    fill: "currentColor"
  }));
};
export default SvgTrip;