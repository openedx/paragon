function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGamepadFill = function SvgGamepadFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-551 369-663v-217h223v217L480-551Zm183 182L551-480l112-112h217v223H663Zm-583 0v-223h217l112 112-112 111H80ZM369-80v-217l111-112 112 112v217H369Z",
    fill: "currentColor"
  }));
};
export default SvgGamepadFill;