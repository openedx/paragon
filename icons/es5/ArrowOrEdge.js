function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArrowOrEdge = function SvgArrowOrEdge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M300-120 154-266l42-43 74 74v-285H40v-320h60v260h230v345l74-73 42 42-146 146Zm359 0L513-266l42-43 74 74v-345h231v-260h60v320H689v285l74-73 42 42-146 146Z",
    fill: "currentColor"
  }));
};
export default SvgArrowOrEdge;