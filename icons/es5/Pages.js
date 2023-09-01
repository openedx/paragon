function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgPages(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v8h5L7 7l4 1V3H3zm5 10H3v8h8v-5l-4 1 1-4zm9 4l-4-1v5h8v-8h-5l1 4zm4-14h-8v5l4-1-1 4h5V3z",
    fill: "currentColor"
  }));
}
export default SvgPages;