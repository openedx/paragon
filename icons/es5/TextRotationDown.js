function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgTextRotationDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 20l3-3H7V4H5v13H3l3 3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1l2.2.9zm6.82 2.5L14 12.87V9.13L19.02 11z",
    fill: "currentColor"
  }));
}
export default SvgTextRotationDown;