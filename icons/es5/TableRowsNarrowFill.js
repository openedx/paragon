function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTableRowsNarrowFill = function SvgTableRowsNarrowFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-315h720v-135H120v135Zm0-195h720v-135H120v135Zm0-195h720v-135H120v135Zm720 585v-720 720Zm-720 0h720v-135H120v135Z",
    fill: "currentColor"
  }));
};
export default SvgTableRowsNarrowFill;