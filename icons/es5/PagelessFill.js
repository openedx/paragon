function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPagelessFill = function SvgPagelessFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-80v-330h60v270h310v60H40Zm510 0v-60h310v-270h60v330H550ZM40-550v-330h370v60H100v270H40Zm820 0v-270H550v-60h370v330h-60Z",
    fill: "currentColor"
  }));
};
export default SvgPagelessFill;