function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgViewRealSize = function SvgViewRealSize(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M284-280v-340h-84v-60h144v400h-60Zm167 0v-60h60v60h-60Zm209 0v-340h-84v-60h144v400h-60ZM451-450v-60h60v60h-60Z",
    fill: "currentColor"
  }));
};
export default SvgViewRealSize;