function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAllOutFill = function SvgAllOutFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-175h60v115h115v60H120Zm545 0v-60h115v-115h60v175H665Zm-185-60q-125 0-212.5-87.5T180-480q0-125 87.5-212.5T480-780q125 0 212.5 87.5T780-480q0 125-87.5 212.5T480-180ZM120-665v-175h175v60H180v115h-60Zm660 0v-115H665v-60h175v175h-60Z",
    fill: "currentColor"
  }));
};
export default SvgAllOutFill;