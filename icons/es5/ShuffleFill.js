function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShuffleFill = function SvgShuffleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M576-160v-60h120L522-393l42-43 176 174v-121h60v223H576Zm-374 0-42-43 538-537H576v-60h224v223h-60v-120L202-160Zm193-363L160-757l43-43 235 234-43 43Z",
    fill: "currentColor"
  }));
};
export default SvgShuffleFill;