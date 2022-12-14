function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgDoubleArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 5H11l5 7-5 7h4.5l5-7z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 5H4l5 7-5 7h4.5l5-7z",
    fill: "currentColor"
  }));
}
export default SvgDoubleArrow;