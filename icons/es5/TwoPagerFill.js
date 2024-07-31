function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTwoPagerFill = function SvgTwoPagerFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h800v640H80Zm430-60h310v-520H510v520Zm-320-97h210v-60H190v60Zm0-129h210v-60H190v60Zm0-129h210v-60H190v60Zm370 258h210v-60H560v60Zm0-129h210v-60H560v60Zm0-129h210v-60H560v60Z",
    fill: "currentColor"
  }));
};
export default SvgTwoPagerFill;