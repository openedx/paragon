function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNewsstand = function SvgNewsstand(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-60h800v60H80Zm89-160v-316h60v316h-60Zm159 0v-480h60v480h-60Zm159 0v-480h60v480h-60Zm275 0L597-600l54-30 162 280-51 30Z",
    fill: "currentColor"
  }));
};
export default SvgNewsstand;