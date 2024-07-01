function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCrosswordFill = function SvgCrosswordFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M356-79v-237h247v237H356ZM80-356v-247h236v247H80Zm276 0v-247h247v247H356Zm287 0v-247h237v247H643Zm0-287v-237h237v237H643Z",
    fill: "currentColor"
  }));
};
export default SvgCrosswordFill;