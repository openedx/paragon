function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHighlightFill = function SvgHighlightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m225-655-85-84 43-43 84 85-42 42Zm225-105v-120h60v120h-60Zm285 107-43-43 86-84 42 42-85 85ZM360-80v-200L240-400v-200h480v200L600-280v200H360Z",
    fill: "currentColor"
  }));
};
export default SvgHighlightFill;