function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFitWidthFill = function SvgFitWidthFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h60v720h-60Zm660 0v-720h60v720h-60ZM285-450v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Z",
    fill: "currentColor"
  }));
};
export default SvgFitWidthFill;