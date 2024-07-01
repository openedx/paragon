function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTableRowsNarrow = function SvgTableRowsNarrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-345h600v-105H180v105Zm0-165h600v-105H180v105Zm0-165h600v-105H180v105Zm-60 555v-720h720v720H120Zm60-60h600v-105H180v105Z",
    fill: "currentColor"
  }));
};
export default SvgTableRowsNarrow;