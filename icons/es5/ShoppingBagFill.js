function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShoppingBagFill = function SvgShoppingBagFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-80v-640h170v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h170v640H160Zm230-640h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10Zm-60 180h60v-120h-60v120Zm240 0h60v-120h-60v120Z",
    fill: "currentColor"
  }));
};
export default SvgShoppingBagFill;