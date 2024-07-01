function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMarginFill = function SvgMarginFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm155-487h78v-78h-78v78Zm166-1 79 1 1-79-79-1-1 79Zm167 1h78v-78h-78v78ZM275-441h78v-78h-78v78Zm166-1 79 1 1-79-79-1-1 79Zm167 1h78v-78h-78v78Z",
    fill: "currentColor"
  }));
};
export default SvgMarginFill;